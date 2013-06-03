
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПланПроизводстваПоСменам:ДокументОбъект
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
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public DateTime МоментЗапасов {get;set;}//Момент запасов
		[DataMember]
		[ProtoMember(14)]
		public DateTime НачальнаяГраница {get;set;}//Начальная граница
		///<summary>
		///Флаг использования механизма детального планирования
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public bool ИспользоватьДетальныеИсточники {get;set;}//Использовать детальные источники
		///<summary>
		///Флаг выполнения разузлования номенклатуры при получении данных механизмом детального планирования
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public bool РазузловатьПриПолучении {get;set;}//Разузловать при получении
		///<summary>
		///Флаг автоматической свертки по комплектующим при получении данных механизмом детального планирования
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public bool АвтоСвертка {get;set;}//Авто свертка
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
						Insert Into _Document513(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld12938
						,_Fld12939RRef
						,_Fld12940RRef
						,_Fld12941RRef
						,_Fld12942
						,_Fld12943
						,_Fld12944
						,_Fld12945
						,_Fld12946)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Комментарий
						,@Ответственный
						,@Подразделение
						,@Проект
						,@МоментЗапасов
						,@НачальнаяГраница
						,@ИспользоватьДетальныеИсточники
						,@РазузловатьПриПолучении
						,@АвтоСвертка)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document513
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld12938	= @Комментарий
						,_Fld12939RRef	= @Ответственный
						,_Fld12940RRef	= @Подразделение
						,_Fld12941RRef	= @Проект
						,_Fld12942	= @МоментЗапасов
						,_Fld12943	= @НачальнаяГраница
						,_Fld12944	= @ИспользоватьДетальныеИсточники
						,_Fld12945	= @РазузловатьПриПолучении
						,_Fld12946	= @АвтоСвертка
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("МоментЗапасов", МоментЗапасов);
					Команда.Parameters.AddWithValue("НачальнаяГраница", НачальнаяГраница);
					Команда.Parameters.AddWithValue("ИспользоватьДетальныеИсточники", ИспользоватьДетальныеИсточники);
					Команда.Parameters.AddWithValue("РазузловатьПриПолучении", РазузловатьПриПолучении);
					Команда.Parameters.AddWithValue("АвтоСвертка", АвтоСвертка);
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
					Команда.CommandText = @"Delete _Document513
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}