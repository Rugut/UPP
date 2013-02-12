
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
	///Вложения электронных писем
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВложенияЭлектронныхПисем:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("e17fb3af-3331-4fa2-995a-a185ea2277c3");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191450.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///Объект
		///</summary>
		[DataMember]
		[ProtoMember(6)]
		public V82.ДокументыСсылка.ЭлектронноеПисьмо Объект {get;set;}
		///<summary>
		///Имя файла
		///</summary>
		[DataMember]
		[ProtoMember(7)]
		public string/*(0)*/ ИмяФайла {get;set;}//Имя файла
		///<summary>
		///Хранилище
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public ХранилищеЗначения Хранилище {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*(200)*/ ИДФайлаПочтовогоПисьма {get;set;}//ИДФайла почтового письма
		[DataMember]
		[ProtoMember(10)]
		public object Предмет {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public ХранилищеЗначения ТекстФайла {get;set;}//Текст файла

		public V82.СправочникиОбъект.ВложенияЭлектронныхПисем  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ВложенияЭлектронныхПисем();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ИмяФайла = ИмяФайла;
			Объект.Хранилище = Хранилище;
			Объект.ИДФайлаПочтовогоПисьма = ИДФайлаПочтовогоПисьма;
			Объект.Предмет = Предмет;
			Объект.ТекстФайла = ТекстФайла;
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