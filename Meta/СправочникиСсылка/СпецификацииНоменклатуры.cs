
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
	[ProtoContract]
	[DataContract]
	public partial class СпецификацииНоменклатуры:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d0670ea3-f15c-478a-8cb1-a55c65c2f089");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191717.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаУтверждения {get;set;}//Дата утверждения
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ВидыСпецификаций ВидСпецификации {get;set;}//Вид спецификации
		[DataMember]
		[ProtoMember(12)]
		public bool Активная {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public string/*(5)*/ КодВерсии {get;set;}//Код версии
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public bool ИспользоватьВозвратныеОтходы {get;set;}//Использовать возвратные отходы
		[DataMember]
		[ProtoMember(17)]
		public bool ИспользоватьПараметрыВыпускаПродукции {get;set;}//Использовать параметры выпуска продукции
		[DataMember]
		[ProtoMember(18)]
		public bool ИспользоватьДокументацию {get;set;}//Использовать документацию
		[DataMember]
		[ProtoMember(19)]
		public bool ИспользоватьВидНорматива {get;set;}//Использовать вид норматива
		[DataMember]
		[ProtoMember(20)]
		public bool ИспользоватьВидВоспроизводства {get;set;}//Использовать вид воспроизводства
		[DataMember]
		[ProtoMember(21)]
		public bool ИспользоватьУказаниеНорматива {get;set;}//Использовать указание норматива
		[DataMember]
		[ProtoMember(22)]
		public bool ИспользоватьФормулы {get;set;}//Использовать формулы
		[DataMember]
		[ProtoMember(23)]
		public bool ИспользоватьУправлениеСписанием {get;set;}//Использовать управление списанием
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.НазначенияИспользованияСпецификаций Назначение {get;set;}

		public V82.СправочникиОбъект.СпецификацииНоменклатуры  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СпецификацииНоменклатуры();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Состояние = Состояние;
			Объект.ДатаУтверждения = ДатаУтверждения;
			Объект.ВидСпецификации = ВидСпецификации;
			Объект.Активная = Активная;
			Объект.КодВерсии = КодВерсии;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ИспользоватьВозвратныеОтходы = ИспользоватьВозвратныеОтходы;
			Объект.ИспользоватьПараметрыВыпускаПродукции = ИспользоватьПараметрыВыпускаПродукции;
			Объект.ИспользоватьДокументацию = ИспользоватьДокументацию;
			Объект.ИспользоватьВидНорматива = ИспользоватьВидНорматива;
			Объект.ИспользоватьВидВоспроизводства = ИспользоватьВидВоспроизводства;
			Объект.ИспользоватьУказаниеНорматива = ИспользоватьУказаниеНорматива;
			Объект.ИспользоватьФормулы = ИспользоватьФормулы;
			Объект.ИспользоватьУправлениеСписанием = ИспользоватьУправлениеСписанием;
			Объект.Назначение = Назначение;
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