
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
	public partial class ПеречислениеНДФЛвБюджет:ДокументОбъект
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
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаПлатежа {get;set;}//Дата платежа
		[DataMember]
		[ProtoMember(13)]
		public DateTime МесяцНалоговогоПериода {get;set;}//Месяц налогового периода
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(15.2)*/ Сумма {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public string/*(30)*/ ПлатежноеПоручениеНомер {get;set;}//Номер платежного поручения
		[DataMember]
		[ProtoMember(16)]
		public DateTime ПлатежноеПоручениеДата {get;set;}//Дата платежного поручения
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.НДФЛСтавки Ставка {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public string/*(21)*/ ОКАТО_КПП {get;set;}//ОКАТО/КПП
		[DataMember]
		[ProtoMember(19)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
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
						Insert Into _Document505(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12704RRef
						,_Fld12705
						,_Fld12706RRef
						,_Fld12707
						,_Fld12708
						,_Fld12709
						,_Fld12710
						,_Fld12711
						,_Fld12712RRef
						,_Fld12713
						,_Fld12714)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Комментарий
						,@Ответственный
						,@ДатаПлатежа
						,@МесяцНалоговогоПериода
						,@Сумма
						,@ПлатежноеПоручениеНомер
						,@ПлатежноеПоручениеДата
						,@Ставка
						,@ОКАТО_КПП
						,@КраткийСоставДокумента)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document505
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12704RRef	= @Организация
						,_Fld12705	= @Комментарий
						,_Fld12706RRef	= @Ответственный
						,_Fld12707	= @ДатаПлатежа
						,_Fld12708	= @МесяцНалоговогоПериода
						,_Fld12709	= @Сумма
						,_Fld12710	= @ПлатежноеПоручениеНомер
						,_Fld12711	= @ПлатежноеПоручениеДата
						,_Fld12712RRef	= @Ставка
						,_Fld12713	= @ОКАТО_КПП
						,_Fld12714	= @КраткийСоставДокумента
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ДатаПлатежа", ДатаПлатежа);
					Команда.Parameters.AddWithValue("МесяцНалоговогоПериода", МесяцНалоговогоПериода);
					Команда.Parameters.AddWithValue("Сумма", Сумма);
					Команда.Parameters.AddWithValue("ПлатежноеПоручениеНомер", ПлатежноеПоручениеНомер);
					Команда.Parameters.AddWithValue("ПлатежноеПоручениеДата", ПлатежноеПоручениеДата);
					Команда.Parameters.AddWithValue("Ставка", Ставка.Ключ());
					Команда.Parameters.AddWithValue("ОКАТО_КПП", ОКАТО_КПП);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
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
					Команда.CommandText = @"Delete _Document505
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}