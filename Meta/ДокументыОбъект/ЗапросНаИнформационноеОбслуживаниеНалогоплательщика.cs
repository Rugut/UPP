
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
	[ProtoContract]
	[DataContract]
	public partial class ЗапросНаИнформационноеОбслуживаниеНалогоплательщика:ДокументОбъект
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
		public V82.СправочникиСсылка.РегистрацияВИФНС Получатель {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаНачалаПериода {get;set;}//Дата начала периода
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаОкончанияПериода {get;set;}//Дата окончания периода
		[DataMember]
		[ProtoMember(13)]
		public V82.Перечисления/*Ссылка*/.ВидыУслугПриИОН ВидУслуги {get;set;}//Вид услуги
		[DataMember]
		[ProtoMember(14)]
		public V82.Перечисления/*Ссылка*/.ФорматОтветаНаЗапросИОН ФорматОтвета {get;set;}//Формат ответа
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ АдресПредставленияСправки {get;set;}//Адрес представления справки
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(1)*/ ДополнительныйПараметр {get;set;}//Дополнительный параметр
		[DataMember]
		[ProtoMember(17)]
		public V82.Перечисления/*Ссылка*/.ФорматыДокументооборотаСФНС ФорматЗапроса {get;set;}//Формат запроса
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
						Insert Into _Document23145(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld24205RRef
						,_Fld24206RRef
						,_Fld24207
						,_Fld24208
						,_Fld24209RRef
						,_Fld24210RRef
						,_Fld24211
						,_Fld24212
						,_Fld24213RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Получатель
						,@ДатаНачалаПериода
						,@ДатаОкончанияПериода
						,@ВидУслуги
						,@ФорматОтвета
						,@АдресПредставленияСправки
						,@ДополнительныйПараметр
						,@ФорматЗапроса)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document23145
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld24205RRef	= @Организация
						,_Fld24206RRef	= @Получатель
						,_Fld24207	= @ДатаНачалаПериода
						,_Fld24208	= @ДатаОкончанияПериода
						,_Fld24209RRef	= @ВидУслуги
						,_Fld24210RRef	= @ФорматОтвета
						,_Fld24211	= @АдресПредставленияСправки
						,_Fld24212	= @ДополнительныйПараметр
						,_Fld24213RRef	= @ФорматЗапроса
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ДатаНачалаПериода", ДатаНачалаПериода);
					Команда.Parameters.AddWithValue("ДатаОкончанияПериода", ДатаОкончанияПериода);
					Команда.Parameters.AddWithValue("ВидУслуги", ВидУслуги.Ключ());
					Команда.Parameters.AddWithValue("ФорматОтвета", ФорматОтвета.Ключ());
					Команда.Parameters.AddWithValue("АдресПредставленияСправки", АдресПредставленияСправки);
					Команда.Parameters.AddWithValue("ДополнительныйПараметр", ДополнительныйПараметр);
					Команда.Parameters.AddWithValue("ФорматЗапроса", ФорматЗапроса.Ключ());
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
					Команда.CommandText = @"Delete _Document23145
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}