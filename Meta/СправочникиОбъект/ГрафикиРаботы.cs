
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
	public partial class ГрафикиРаботы:СправочникОбъект
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
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public V82.Перечисления/*Ссылка*/.ВидыРабочихГрафиков ВидГрафика {get;set;}//Вид графика
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public bool СуммированныйУчетРабочегоВремени {get;set;}//Суммированный учет рабочего времени
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ДниНедели ПервыйВыходной {get;set;}//Первый выходной
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.ДниНедели ВторойВыходной {get;set;}//Второй выходной
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public DateTime ДатаОтсчета {get;set;}//Дата отсчета
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(7.2)*/ ДлительностьРабочейНедели {get;set;}//Длительность рабочей недели
		[DataMember]
		[ProtoMember(13)]
		public bool СокращенноеРабочееВремя {get;set;}//Сокращенное рабочее время
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ГрафикиРаботы ГрафикПолногоРабочегоВремени {get;set;}//График полного рабочего времени
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public DateTime НачалоДневныхЧасов {get;set;}//Начало дневных часов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public DateTime НачалоВечернихЧасов {get;set;}//Начало вечерних часов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public DateTime НачалоНочныхЧасов {get;set;}//Начало ночных часов
		[DataMember]
		[ProtoMember(18)]
		public bool СокращеннаяРабочаяНеделя {get;set;}//Сокращенная рабочая неделя
		[DataMember]
		[ProtoMember(19)]
		public bool НеполныйРабочийДень {get;set;}//Неполный рабочий день
		///<summary>
		///Учитывать праздники при автозаполнении графика
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool УчитыватьПраздники {get;set;}//Учитывать праздники
		[DataMember]
		[ProtoMember(21)]
		public bool УчитыватьВечерниеЧасы {get;set;}//Учитывать вечерние часы
		[DataMember]
		[ProtoMember(22)]
		public bool УчитыватьНочныеЧасы {get;set;}//Учитывать ночные часы
		[DataMember]
		[ProtoMember(23)]
		public V82.Перечисления/*Ссылка*/.ШаблонЗаполненияГрафикаРаботы ШаблонЗаполнения {get;set;}//Шаблон заполнения
		[DataMember]
		[ProtoMember(24)]
		public bool УдалитьВыходныеПоСкользящемуГрафику {get;set;}//Удалить выходные по скользящему графику
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
						Insert Into _Reference72(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Description
						,_Fld2043RRef
						,_Fld2044
						,_Fld2045RRef
						,_Fld2046RRef
						,_Fld2047
						,_Fld2048
						,_Fld2049
						,_Fld2050RRef
						,_Fld2051
						,_Fld2052
						,_Fld2053
						,_Fld2054
						,_Fld2055
						,_Fld2056
						,_Fld2057
						,_Fld2058
						,_Fld2059RRef
						,_Fld2060)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Наименование
						,@ВидГрафика
						,@СуммированныйУчетРабочегоВремени
						,@ПервыйВыходной
						,@ВторойВыходной
						,@ДатаОтсчета
						,@ДлительностьРабочейНедели
						,@СокращенноеРабочееВремя
						,@ГрафикПолногоРабочегоВремени
						,@НачалоДневныхЧасов
						,@НачалоВечернихЧасов
						,@НачалоНочныхЧасов
						,@СокращеннаяРабочаяНеделя
						,@НеполныйРабочийДень
						,@УчитыватьПраздники
						,@УчитыватьВечерниеЧасы
						,@УчитыватьНочныеЧасы
						,@ШаблонЗаполнения
						,@УдалитьВыходныеПоСкользящемуГрафику)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference72
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Description	= @Наименование
						,_Fld2043RRef	= @ВидГрафика
						,_Fld2044	= @СуммированныйУчетРабочегоВремени
						,_Fld2045RRef	= @ПервыйВыходной
						,_Fld2046RRef	= @ВторойВыходной
						,_Fld2047	= @ДатаОтсчета
						,_Fld2048	= @ДлительностьРабочейНедели
						,_Fld2049	= @СокращенноеРабочееВремя
						,_Fld2050RRef	= @ГрафикПолногоРабочегоВремени
						,_Fld2051	= @НачалоДневныхЧасов
						,_Fld2052	= @НачалоВечернихЧасов
						,_Fld2053	= @НачалоНочныхЧасов
						,_Fld2054	= @СокращеннаяРабочаяНеделя
						,_Fld2055	= @НеполныйРабочийДень
						,_Fld2056	= @УчитыватьПраздники
						,_Fld2057	= @УчитыватьВечерниеЧасы
						,_Fld2058	= @УчитыватьНочныеЧасы
						,_Fld2059RRef	= @ШаблонЗаполнения
						,_Fld2060	= @УдалитьВыходныеПоСкользящемуГрафику
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ВидГрафика", ВидГрафика.Ключ());
					Команда.Parameters.AddWithValue("СуммированныйУчетРабочегоВремени", СуммированныйУчетРабочегоВремени);
					Команда.Parameters.AddWithValue("ПервыйВыходной", ПервыйВыходной.Ключ());
					Команда.Parameters.AddWithValue("ВторойВыходной", ВторойВыходной.Ключ());
					Команда.Parameters.AddWithValue("ДатаОтсчета", ДатаОтсчета);
					Команда.Parameters.AddWithValue("ДлительностьРабочейНедели", ДлительностьРабочейНедели);
					Команда.Parameters.AddWithValue("СокращенноеРабочееВремя", СокращенноеРабочееВремя);
					Команда.Parameters.AddWithValue("ГрафикПолногоРабочегоВремени", ГрафикПолногоРабочегоВремени.Ссылка);
					Команда.Parameters.AddWithValue("НачалоДневныхЧасов", НачалоДневныхЧасов);
					Команда.Parameters.AddWithValue("НачалоВечернихЧасов", НачалоВечернихЧасов);
					Команда.Parameters.AddWithValue("НачалоНочныхЧасов", НачалоНочныхЧасов);
					Команда.Parameters.AddWithValue("СокращеннаяРабочаяНеделя", СокращеннаяРабочаяНеделя);
					Команда.Parameters.AddWithValue("НеполныйРабочийДень", НеполныйРабочийДень);
					Команда.Parameters.AddWithValue("УчитыватьПраздники", УчитыватьПраздники);
					Команда.Parameters.AddWithValue("УчитыватьВечерниеЧасы", УчитыватьВечерниеЧасы);
					Команда.Parameters.AddWithValue("УчитыватьНочныеЧасы", УчитыватьНочныеЧасы);
					Команда.Parameters.AddWithValue("ШаблонЗаполнения", ШаблонЗаполнения.Ключ());
					Команда.Parameters.AddWithValue("УдалитьВыходныеПоСкользящемуГрафику", УдалитьВыходныеПоСкользящемуГрафику);
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
					Команда.CommandText = @"Delete _Reference72
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}