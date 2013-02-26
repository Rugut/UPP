
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
	public partial class НалоговыеОрганы:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("31248f0c-d7f3-45dc-be41-d892b0833ef9");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190933.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Родитель {get;set;}
		public string/*4*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*120*/ Наименование {get;set;}
		public V82.СправочникиСсылка.ВидыНалоговыхОрганов Вид {get;set;}//Вид налогового органа
		public string/*(250)*/ ПолноеНаименование {get;set;}//Полное наименование
		public bool УчетНалогоплательщиков {get;set;}//Учет налогоплательщиков
		public bool ПриемНалоговойОтчетности {get;set;}//Прием налоговой отчетности
		public string/*(10)*/ ИНН {get;set;}
		public string/*(9)*/ КПП {get;set;}
		public string/*(128)*/ Адрес {get;set;}
		public string/*(64)*/ Телефон {get;set;}
		public string/*(64)*/ АдресЭлектроннойПочты {get;set;}//Адрес электронной почты
		public string/*(64)*/ АдресСайта {get;set;}//Адрес сайта
		public string/*(250)*/ Комментарий {get;set;}
		public string/*(40)*/ УдалитьСертификат {get;set;}//Удалить сертификат
		public string/*(254)*/ АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками {get;set;}//Адрес электронной почты для целей документооборота с налогоплательщиками
		
		public НалоговыеОрганы()
		{
		}
		
		public НалоговыеОрганы(byte[] УникальныйИдентификатор)
		{
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
					,_Fld2574RRef [Вид]
					,_Fld2575 [ПолноеНаименование]
					,_Fld2576 [УчетНалогоплательщиков]
					,_Fld2577 [ПриемНалоговойОтчетности]
					,_Fld2578 [ИНН]
					,_Fld2579 [КПП]
					,_Fld2580 [Адрес]
					,_Fld2581 [Телефон]
					,_Fld2582 [АдресЭлектроннойПочты]
					,_Fld2583 [АдресСайта]
					,_Fld2584 [Комментарий]
					,_Fld2585 [УдалитьСертификат]
					,_Fld2586 [АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками]
					From _Reference144(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
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
							Вид = new V82.СправочникиСсылка.ВидыНалоговыхОрганов((byte[])Читалка.GetValue(6));
							ПолноеНаименование = Читалка.GetString(7);
							УчетНалогоплательщиков = ((byte[])Читалка.GetValue(8))[0]==1;
							ПриемНалоговойОтчетности = ((byte[])Читалка.GetValue(9))[0]==1;
							ИНН = Читалка.GetString(10);
							КПП = Читалка.GetString(11);
							Адрес = Читалка.GetString(12);
							Телефон = Читалка.GetString(13);
							АдресЭлектроннойПочты = Читалка.GetString(14);
							АдресСайта = Читалка.GetString(15);
							Комментарий = Читалка.GetString(16);
							УдалитьСертификат = Читалка.GetString(17);
							АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками = Читалка.GetString(18);
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
		
		public V82.СправочникиОбъект.НалоговыеОрганы  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НалоговыеОрганы();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Вид = Вид;
			Объект.ПолноеНаименование = ПолноеНаименование;
			Объект.УчетНалогоплательщиков = УчетНалогоплательщиков;
			Объект.ПриемНалоговойОтчетности = ПриемНалоговойОтчетности;
			Объект.ИНН = ИНН;
			Объект.КПП = КПП;
			Объект.Адрес = Адрес;
			Объект.Телефон = Телефон;
			Объект.АдресЭлектроннойПочты = АдресЭлектроннойПочты;
			Объект.АдресСайта = АдресСайта;
			Объект.Комментарий = Комментарий;
			Объект.УдалитьСертификат = УдалитьСертификат;
			Объект.АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками = АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.НалоговыеОрганы ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.НалоговыеОрганы)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.НалоговыеОрганы(УникальныйИдентификатор);
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