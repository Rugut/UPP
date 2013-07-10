
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
	public partial class ДокументыРеализацииПолномочийНалоговыхОрганов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("9deb49bc-6178-4b38-82e0-db3917dda901");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012001.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*150*/ Наименование {get;set;}
		public V82.СправочникиСсылка.НалоговыеОрганы НалоговыйОрган {get;set;}//Налоговый орган
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public string/*(150)*/ Идентификатор {get;set;}
		public string/*(150)*/ ИдентификаторОснования {get;set;}//Идентификатор основания
		///<summary>
		///Вид налогового документа
		///</summary>
		public object ВидДокумента {get;set;}//Вид документа
		public string/*(150)*/ НомерДокумента {get;set;}//Номер документа
		public DateTime ДатаДокумента {get;set;}//Дата документа
		public DateTime ДатаСообщения {get;set;}//Дата сообщения
		public DateTime ДатаОтправки {get;set;}//Дата отправки
		
		public ДокументыРеализацииПолномочийНалоговыхОрганов()
		{
		}
		
		public ДокументыРеализацииПолномочийНалоговыхОрганов(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ДокументыРеализацииПолномочийНалоговыхОрганов(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld23477RRef [НалоговыйОрган]
					,_Fld23478RRef [Организация]
					,_Fld23479 [Идентификатор]
					,_Fld23480 [ИдентификаторОснования]
					,_Fld23481_TYPE [ВидДокумента_Тип],_Fld23481_RRRef [ВидДокумента],_Fld23481_RTRef [ВидДокумента_Вид]
					,_Fld23482 [НомерДокумента]
					,_Fld23483 [ДатаДокумента]
					,_Fld23484 [ДатаСообщения]
					,_Fld23485 [ДатаОтправки]
					From _Reference23096(NOLOCK)
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
							НалоговыйОрган = new V82.СправочникиСсылка.НалоговыеОрганы((byte[])Читалка.GetValue(6),Глубина+1);
							Организация = new V82.СправочникиСсылка.Организации((byte[])Читалка.GetValue(7),Глубина+1);
							Идентификатор = Читалка.GetString(8);
							ИдентификаторОснования = Читалка.GetString(9);
							НомерДокумента = Читалка.GetString(13);
							ДатаДокумента = Читалка.GetDateTime(14);
							ДатаСообщения = Читалка.GetDateTime(15);
							ДатаОтправки = Читалка.GetDateTime(16);
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
		
		public V82.СправочникиОбъект.ДокументыРеализацииПолномочийНалоговыхОрганов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ДокументыРеализацииПолномочийНалоговыхОрганов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.НалоговыйОрган = НалоговыйОрган;
			Объект.Организация = Организация;
			Объект.Идентификатор = Идентификатор;
			Объект.ИдентификаторОснования = ИдентификаторОснования;
			Объект.ВидДокумента = ВидДокумента;
			Объект.НомерДокумента = НомерДокумента;
			Объект.ДатаДокумента = ДатаДокумента;
			Объект.ДатаСообщения = ДатаСообщения;
			Объект.ДатаОтправки = ДатаОтправки;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ДокументыРеализацииПолномочийНалоговыхОрганов ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ДокументыРеализацииПолномочийНалоговыхОрганов)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ДокументыРеализацииПолномочийНалоговыхОрганов(УникальныйИдентификатор);
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