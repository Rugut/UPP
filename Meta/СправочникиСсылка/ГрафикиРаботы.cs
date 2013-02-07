
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ГрафикиРаботы:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b4923b8c-6737-4f2f-b910-efcc0f652260");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191007.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(3)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(4)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(6)]
		public V82.Перечисления/*Ссылка*/.ВидыРабочихГрафиков ВидГрафика {get;set;}//Вид графика
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public bool СуммированныйУчетРабочегоВремени {get;set;}//Суммированный учет рабочего времени
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public V82.Перечисления/*Ссылка*/.ДниНедели ПервыйВыходной {get;set;}//Первый выходной
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ДниНедели ВторойВыходной {get;set;}//Второй выходной
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаОтсчета {get;set;}//Дата отсчета
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public decimal/*(7.2)*/ ДлительностьРабочейНедели {get;set;}//Длительность рабочей недели
		[DataMember]
		[ProtoMember(12)]
		public bool СокращенноеРабочееВремя {get;set;}//Сокращенное рабочее время
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.ГрафикиРаботы ГрафикПолногоРабочегоВремени {get;set;}//График полного рабочего времени
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public DateTime НачалоДневныхЧасов {get;set;}//Начало дневных часов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public DateTime НачалоВечернихЧасов {get;set;}//Начало вечерних часов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public DateTime НачалоНочныхЧасов {get;set;}//Начало ночных часов
		[DataMember]
		[ProtoMember(17)]
		public bool СокращеннаяРабочаяНеделя {get;set;}//Сокращенная рабочая неделя
		[DataMember]
		[ProtoMember(18)]
		public bool НеполныйРабочийДень {get;set;}//Неполный рабочий день
		///<summary>
		///Учитывать праздники при автозаполнении графика
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool УчитыватьПраздники {get;set;}//Учитывать праздники
		[DataMember]
		[ProtoMember(20)]
		public bool УчитыватьВечерниеЧасы {get;set;}//Учитывать вечерние часы
		[DataMember]
		[ProtoMember(21)]
		public bool УчитыватьНочныеЧасы {get;set;}//Учитывать ночные часы
		[DataMember]
		[ProtoMember(22)]
		public V82.Перечисления/*Ссылка*/.ШаблонЗаполненияГрафикаРаботы ШаблонЗаполнения {get;set;}//Шаблон заполнения
		[DataMember]
		[ProtoMember(23)]
		public bool УдалитьВыходныеПоСкользящемуГрафику {get;set;}//Удалить выходные по скользящему графику

		public V82.СправочникиОбъект.ГрафикиРаботы  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ГрафикиРаботы();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ВидГрафика = ВидГрафика;
			Объект.СуммированныйУчетРабочегоВремени = СуммированныйУчетРабочегоВремени;
			Объект.ПервыйВыходной = ПервыйВыходной;
			Объект.ВторойВыходной = ВторойВыходной;
			Объект.ДатаОтсчета = ДатаОтсчета;
			Объект.ДлительностьРабочейНедели = ДлительностьРабочейНедели;
			Объект.СокращенноеРабочееВремя = СокращенноеРабочееВремя;
			Объект.ГрафикПолногоРабочегоВремени = ГрафикПолногоРабочегоВремени;
			Объект.НачалоДневныхЧасов = НачалоДневныхЧасов;
			Объект.НачалоВечернихЧасов = НачалоВечернихЧасов;
			Объект.НачалоНочныхЧасов = НачалоНочныхЧасов;
			Объект.СокращеннаяРабочаяНеделя = СокращеннаяРабочаяНеделя;
			Объект.НеполныйРабочийДень = НеполныйРабочийДень;
			Объект.УчитыватьПраздники = УчитыватьПраздники;
			Объект.УчитыватьВечерниеЧасы = УчитыватьВечерниеЧасы;
			Объект.УчитыватьНочныеЧасы = УчитыватьНочныеЧасы;
			Объект.ШаблонЗаполнения = ШаблонЗаполнения;
			Объект.УдалитьВыходныеПоСкользящемуГрафику = УдалитьВыходныеПоСкользящемуГрафику;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}

		public string СериализацияJson()
		{
			return this.ToJson();
		}

		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}