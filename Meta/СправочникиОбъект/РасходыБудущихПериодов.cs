
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
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class РасходыБудущихПериодов:СправочникОбъект
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
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*11*/ Код {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ВидыРБП ВидРБП {get;set;}//Вид РБП
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаНачалаСписания {get;set;}//Дата начала списания
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public DateTime ДатаОкончанияСписания {get;set;}//Дата окончания списания
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы НоменклатурнаяГруппа {get;set;}//Номенклатурная группа
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ОбъектыСтроительства ОбъектСтроительства {get;set;}//Объект строительства
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Номенклатура Продукция {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.СерииНоменклатуры СерияПродукции {get;set;}//Серия продукции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.СтатьиЗатрат СтатьяЗатрат {get;set;}//Статья затрат
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public object СчетБУ {get;set;}//Счет БУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public object СубконтоБУ1 {get;set;}//Субконто БУ 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public object СубконтоБУ2 {get;set;}//Субконто БУ 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public object СубконтоБУ3 {get;set;}//Субконто БУ 3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public object СчетНУ {get;set;}//Счет НУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public object СубконтоНУ1 {get;set;}//Субконто НУ 1
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public object СубконтоНУ2 {get;set;}//Субконто НУ 2
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object СубконтоНУ3 {get;set;}//Субконто НУ 3
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public decimal/*(15.2)*/ Сумма {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.ХарактеристикиНоменклатуры ХарактеристикаПродукции {get;set;}//Характеристика продукции
		[DataMember]
		[ProtoMember(30)]
		public V82.Перечисления/*Ссылка*/.СпособыПризнанияРасходов СпособПризнанияРасходов {get;set;}//Способ признания расходов
		[DataMember]
		[ProtoMember(31)]
		public V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск СпособРаспределенияЗатратНаВыпуск {get;set;}//Способ распределения затрат на выпуск
		[DataMember]
		[ProtoMember(32)]
		public V82.Перечисления/*Ссылка*/.СпособыСтроительства СпособСтроительства {get;set;}//Способ строительства
		[DataMember]
		[ProtoMember(33)]
		public V82.Перечисления/*Ссылка*/.ВидыАктивовДляРБП ВидАктива {get;set;}//Вид актива
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
						Insert Into _Reference216(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld3333RRef
						,_Fld3334
						,_Fld3335
						,_Fld3336RRef
						,_Fld3337RRef
						,_Fld3338RRef
						,_Fld3339RRef
						,_Fld3340RRef
						,_Fld3341RRef
						,_Fld3342RRef
						,_Fld3343RRef
						,_Fld3344RRef
						,_Fld3345RRef
						,_Fld3346RRef
						,_Fld3347RRef
						,_Fld3348RRef
						,_Fld3349RRef
						,_Fld3350RRef
						,_Fld3351
						,_Fld3352RRef
						,_Fld3353RRef
						,_Fld3354RRef
						,_Fld3355RRef
						,_Fld3356RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@ВидРБП
						,@ДатаНачалаСписания
						,@ДатаОкончанияСписания
						,@НоменклатурнаяГруппа
						,@ОбъектСтроительства
						,@Подразделение
						,@ПодразделениеОрганизации
						,@Продукция
						,@СерияПродукции
						,@СтатьяЗатрат
						,@СчетБУ
						,@СубконтоБУ1
						,@СубконтоБУ2
						,@СубконтоБУ3
						,@СчетНУ
						,@СубконтоНУ1
						,@СубконтоНУ2
						,@СубконтоНУ3
						,@Сумма
						,@ХарактеристикаПродукции
						,@СпособПризнанияРасходов
						,@СпособРаспределенияЗатратНаВыпуск
						,@СпособСтроительства
						,@ВидАктива)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference216
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3333RRef	= @ВидРБП
						,_Fld3334	= @ДатаНачалаСписания
						,_Fld3335	= @ДатаОкончанияСписания
						,_Fld3336RRef	= @НоменклатурнаяГруппа
						,_Fld3337RRef	= @ОбъектСтроительства
						,_Fld3338RRef	= @Подразделение
						,_Fld3339RRef	= @ПодразделениеОрганизации
						,_Fld3340RRef	= @Продукция
						,_Fld3341RRef	= @СерияПродукции
						,_Fld3342RRef	= @СтатьяЗатрат
						,_Fld3343RRef	= @СчетБУ
						,_Fld3344RRef	= @СубконтоБУ1
						,_Fld3345RRef	= @СубконтоБУ2
						,_Fld3346RRef	= @СубконтоБУ3
						,_Fld3347RRef	= @СчетНУ
						,_Fld3348RRef	= @СубконтоНУ1
						,_Fld3349RRef	= @СубконтоНУ2
						,_Fld3350RRef	= @СубконтоНУ3
						,_Fld3351	= @Сумма
						,_Fld3352RRef	= @ХарактеристикаПродукции
						,_Fld3353RRef	= @СпособПризнанияРасходов
						,_Fld3354RRef	= @СпособРаспределенияЗатратНаВыпуск
						,_Fld3355RRef	= @СпособСтроительства
						,_Fld3356RRef	= @ВидАктива
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ВидРБП", ВидРБП.Ключ());
					Команда.Parameters.AddWithValue("ДатаНачалаСписания", ДатаНачалаСписания);
					Команда.Parameters.AddWithValue("ДатаОкончанияСписания", ДатаОкончанияСписания);
					Команда.Parameters.AddWithValue("НоменклатурнаяГруппа", НоменклатурнаяГруппа.Ссылка);
					Команда.Parameters.AddWithValue("ОбъектСтроительства", ОбъектСтроительства.Ссылка);
					Команда.Parameters.AddWithValue("Подразделение", Подразделение.Ссылка);
					Команда.Parameters.AddWithValue("ПодразделениеОрганизации", ПодразделениеОрганизации.Ссылка);
					Команда.Parameters.AddWithValue("Продукция", Продукция.Ссылка);
					Команда.Parameters.AddWithValue("СерияПродукции", СерияПродукции.Ссылка);
					Команда.Parameters.AddWithValue("СтатьяЗатрат", СтатьяЗатрат.Ссылка);
					Команда.Parameters.AddWithValue("СчетБУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоБУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоБУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоБУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетНУ", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоНУ3", Guid.Empty);
					Команда.Parameters.AddWithValue("Сумма", Сумма);
					Команда.Parameters.AddWithValue("ХарактеристикаПродукции", ХарактеристикаПродукции.Ссылка);
					Команда.Parameters.AddWithValue("СпособПризнанияРасходов", СпособПризнанияРасходов.Ключ());
					Команда.Parameters.AddWithValue("СпособРаспределенияЗатратНаВыпуск", СпособРаспределенияЗатратНаВыпуск.Ссылка);
					Команда.Parameters.AddWithValue("СпособСтроительства", СпособСтроительства.Ключ());
					Команда.Parameters.AddWithValue("ВидАктива", ВидАктива.Ключ());
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
					Команда.CommandText = @"Delete _Reference216
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}