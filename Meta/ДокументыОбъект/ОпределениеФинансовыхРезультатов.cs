
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОпределениеФинансовыхРезультатов:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		[DataMember]
		[ProtoMember(11)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		[DataMember]
		[ProtoMember(12)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		[DataMember]
		[ProtoMember(13)]
		public bool ОпределениеФинансовогоРезультатаОтПродаж {get;set;}//Определение финансового результата от продаж
		[DataMember]
		[ProtoMember(14)]
		public bool ОпределениеСальдоПрочихДоходовИРасходов {get;set;}//Определение сальдо прочих доходов и расходов
		[DataMember]
		[ProtoMember(15)]
		public bool РасчетРезервовПоСомнительнымДолгам {get;set;}//Расчет резервов по сомнительным долгам
		[DataMember]
		[ProtoMember(16)]
		public bool СписаниеУбытковПрошлыхЛет {get;set;}//Списание убытков прошлых лет (НУ)
		[DataMember]
		[ProtoMember(17)]
		public bool ВключениеАмортизационнойПремииВРасходы {get;set;}//Включение амортизационной премии в расходы
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public string/*(0)*/ Комментарий {get;set;}
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document460(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld10783RRef
						,_Fld10784
						,_Fld10785
						,_Fld10786
						,_Fld10787
						,_Fld10788
						,_Fld10789
						,_Fld10790
						,_Fld10791
						,_Fld10792RRef
						,_Fld10793)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@ПериодРегистрации
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОпределениеФинансовогоРезультатаОтПродаж
						,@ОпределениеСальдоПрочихДоходовИРасходов
						,@РасчетРезервовПоСомнительнымДолгам
						,@СписаниеУбытковПрошлыхЛет
						,@ВключениеАмортизационнойПремииВРасходы
						,@Ответственный
						,@Комментарий)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document460
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld10783RRef	= @Организация
						,_Fld10784	= @ПериодРегистрации
						,_Fld10785	= @ОтражатьВБухгалтерскомУчете
						,_Fld10786	= @ОтражатьВНалоговомУчете
						,_Fld10787	= @ОпределениеФинансовогоРезультатаОтПродаж
						,_Fld10788	= @ОпределениеСальдоПрочихДоходовИРасходов
						,_Fld10789	= @РасчетРезервовПоСомнительнымДолгам
						,_Fld10790	= @СписаниеУбытковПрошлыхЛет
						,_Fld10791	= @ВключениеАмортизационнойПремииВРасходы
						,_Fld10792RRef	= @Ответственный
						,_Fld10793	= @Комментарий
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ПериодРегистрации", ПериодРегистрации);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОпределениеФинансовогоРезультатаОтПродаж", ОпределениеФинансовогоРезультатаОтПродаж);
					Команда.Parameters.AddWithValue("ОпределениеСальдоПрочихДоходовИРасходов", ОпределениеСальдоПрочихДоходовИРасходов);
					Команда.Parameters.AddWithValue("РасчетРезервовПоСомнительнымДолгам", РасчетРезервовПоСомнительнымДолгам);
					Команда.Parameters.AddWithValue("СписаниеУбытковПрошлыхЛет", СписаниеУбытковПрошлыхЛет);
					Команда.Parameters.AddWithValue("ВключениеАмортизационнойПремииВРасходы", ВключениеАмортизационнойПремииВРасходы);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document460
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}