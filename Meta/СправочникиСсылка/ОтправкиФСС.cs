
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
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
	public partial class ОтправкиФСС:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("caa8e55f-cd19-454a-a752-bbf7e879e24f");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011931.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*25*/ Наименование {get;set;}
		public object ОтчетСсылка {get;set;}//Ссылка на регламентированный отчет
		public string/*(100)*/ ИдентификаторОтправкиНаСервере {get;set;}//Идентификатор отправки на сервере
		public ХранилищеЗначения ЗашифрованныйПакет {get;set;}//Зашифрованный пакет выгрузки
		///<summary>
		///Имя файла зашифрованного пакета выгрузки
		///</summary>
		public string/*(100)*/ ИмяФайлаПакета {get;set;}//Имя файла пакета
		public V82.Перечисления/*Ссылка*/.СтатусыОтправки СтатусОтправки {get;set;}//Статус отправки
		///<summary>
		///Протокол обработки
		///</summary>
		public ХранилищеЗначения Протокол {get;set;}//Протокол обработки
		public DateTime ДатаОтправки {get;set;}//Дата отправки
		public DateTime ДатаПолученияРезультата {get;set;}//Дата получения результата
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public string/*(4)*/ КодОрганаФСС {get;set;}//Код органа ФСС
		///<summary>
		///Квитанция успеха
		///</summary>
		public ХранилищеЗначения Квитанция {get;set;}
		
		public ОтправкиФСС()
		{
		}
		
		public ОтправкиФСС(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ОтправкиФСС(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld23664_TYPE [ОтчетСсылка_Тип],_Fld23664_RRRef [ОтчетСсылка],_Fld23664_RTRef [ОтчетСсылка_Вид]
					,_Fld23665 [ИдентификаторОтправкиНаСервере]
					,_Fld23666 [ЗашифрованныйПакет]
					,_Fld23667 [ИмяФайлаПакета]
					,_Fld23668RRef [СтатусОтправки]
					,_Fld23669 [Протокол]
					,_Fld23670 [ДатаОтправки]
					,_Fld23671 [ДатаПолученияРезультата]
					,_Fld23672RRef [Организация]
					,_Fld23673 [КодОрганаФСС]
					,_Fld23674 [Квитанция]
					From _Reference23117(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
								ИдентификаторОтправкиНаСервере = Читалка.GetString(9);
								ИмяФайлаПакета = Читалка.GetString(11);
								СтатусОтправки = V82.Перечисления/*Ссылка*/.СтатусыОтправки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
								ДатаОтправки = Читалка.GetDateTime(14);
								ДатаПолученияРезультата = Читалка.GetDateTime(15);
								Организация = new V82.СправочникиСсылка.Организации((byte[])Читалка.GetValue(16),Глубина+1);
								КодОрганаФСС = Читалка.GetString(17);
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.СправочникиОбъект.ОтправкиФСС  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ОтправкиФСС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ОтчетСсылка = ОтчетСсылка;
			Объект.ИдентификаторОтправкиНаСервере = ИдентификаторОтправкиНаСервере;
			Объект.ЗашифрованныйПакет = ЗашифрованныйПакет;
			Объект.ИмяФайлаПакета = ИмяФайлаПакета;
			Объект.СтатусОтправки = СтатусОтправки;
			Объект.Протокол = Протокол;
			Объект.ДатаОтправки = ДатаОтправки;
			Объект.ДатаПолученияРезультата = ДатаПолученияРезультата;
			Объект.Организация = Организация;
			Объект.КодОрганаФСС = КодОрганаФСС;
			Объект.Квитанция = Квитанция;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ОтправкиФСС ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ОтправкиФСС)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ОтправкиФСС(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
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