
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class ЦиклыОбмена:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*10*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*150*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.УчетныеЗаписиДокументооборота УчетнаяЗапись {get;set;}//Учетная запись
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ТипыЦикловОбмена Тип {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public string/*(100)*/ Идентификатор {get;set;}//Идентификатор цикла обмена
		[DataMember]
		[ProtoMember(11)]
		public object Предмет {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public object ВнешняяОрганизация {get;set;}//Внешняя организация
		[DataMember]
		[ProtoMember(14)]
		public DateTime ДатаСоздания {get;set;}//Дата создания
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия
		[DataMember]
		[ProtoMember(16)]
		public DateTime ДатаПоследнегоСообщения {get;set;}//Дата последнего сообщения
		[DataMember]
		[ProtoMember(17)]
		public object ВидОтчета {get;set;}//Вид отчета
		[DataMember]
		[ProtoMember(18)]
		public DateTime ДатаНачалаПериода {get;set;}//Дата начала периода
		[DataMember]
		[ProtoMember(19)]
		public DateTime ДатаОкончанияПериода {get;set;}//Дата окончания периода
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(3)*/ ВидДокумента {get;set;}//Вид документа
		[DataMember]
		[ProtoMember(21)]
		public V82.Перечисления/*Ссылка*/.ВидыУслугПриИОН ВидУслуги {get;set;}//Вид услуги
		[DataMember]
		[ProtoMember(22)]
		public V82.Перечисления/*Ссылка*/.ФорматОтветаНаЗапросИОН ФорматОтвета {get;set;}//Формат ответа
		[DataMember]
		[ProtoMember(23)]
		public string/*(16)*/ Период {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.Перечисления/*Ссылка*/.ВидыЦикловОбмена Вид {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.Перечисления/*Ссылка*/.ФорматыДокументооборотаСФНС ФорматДокументооборота {get;set;}//Формат документооборота
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference23136(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld23880RRef
						,_Fld23881RRef
						,_Fld23882
						,_Fld23884RRef
						,_Fld23886
						,_Fld23887
						,_Fld23888
						,_Fld23890
						,_Fld23891
						,_Fld23892
						,_Fld23893RRef
						,_Fld23894RRef
						,_Fld23895
						,_Fld23896RRef
						,_Fld23897RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@УчетнаяЗапись
						,@Тип
						,@Идентификатор
						,@Организация
						,@ДатаСоздания
						,@ДатаЗакрытия
						,@ДатаПоследнегоСообщения
						,@ДатаНачалаПериода
						,@ДатаОкончанияПериода
						,@ВидДокумента
						,@ВидУслуги
						,@ФорматОтвета
						,@Период
						,@Вид
						,@ФорматДокументооборота)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference23136
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld23880RRef	= @УчетнаяЗапись
						,_Fld23881RRef	= @Тип
						,_Fld23882	= @Идентификатор
						,_Fld23884RRef	= @Организация
						,_Fld23886	= @ДатаСоздания
						,_Fld23887	= @ДатаЗакрытия
						,_Fld23888	= @ДатаПоследнегоСообщения
						,_Fld23890	= @ДатаНачалаПериода
						,_Fld23891	= @ДатаОкончанияПериода
						,_Fld23892	= @ВидДокумента
						,_Fld23893RRef	= @ВидУслуги
						,_Fld23894RRef	= @ФорматОтвета
						,_Fld23895	= @Период
						,_Fld23896RRef	= @Вид
						,_Fld23897RRef	= @ФорматДокументооборота
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("УчетнаяЗапись", УчетнаяЗапись.Ссылка);
					Команда.Parameters.AddWithValue("Тип", Тип.Ключ());
					Команда.Parameters.AddWithValue("Идентификатор", Идентификатор);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("ДатаСоздания", ДатаСоздания);
					Команда.Parameters.AddWithValue("ДатаЗакрытия", ДатаЗакрытия);
					Команда.Parameters.AddWithValue("ДатаПоследнегоСообщения", ДатаПоследнегоСообщения);
					Команда.Parameters.AddWithValue("ДатаНачалаПериода", ДатаНачалаПериода);
					Команда.Parameters.AddWithValue("ДатаОкончанияПериода", ДатаОкончанияПериода);
					Команда.Parameters.AddWithValue("ВидДокумента", ВидДокумента);
					Команда.Parameters.AddWithValue("ВидУслуги", ВидУслуги.Ключ());
					Команда.Parameters.AddWithValue("ФорматОтвета", ФорматОтвета.Ключ());
					Команда.Parameters.AddWithValue("Период", Период);
					Команда.Parameters.AddWithValue("Вид", Вид.Ключ());
					Команда.Parameters.AddWithValue("ФорматДокументооборота", ФорматДокументооборота.Ключ());
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
					Команда.CommandText = @"Delete _Reference23136
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			if(true/*КонтекстЭДО <> Неопределено*/)
			{
				//КонтекстЭДО.ПередЗаписьюОбъекта(ЭтотОбъект, Отказ);
			}
		}

		public void ПриЗаписи(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			if(true/*КонтекстЭДО <> Неопределено*/)
			{
				//КонтекстЭДО.ПриЗаписиОбъекта(ЭтотОбъект, Отказ);
			}
		}

		public void ОбработкаЗаполнения(/*СообщениеОснование*/)
		{
			if(true/*КонтекстЭДО <> Неопределено*/)
			{
				//КонтекстЭДО.ОбработкаЗаполненияОбъекта(ЭтотОбъект, СообщениеОснование);
			}
		}
	}
}