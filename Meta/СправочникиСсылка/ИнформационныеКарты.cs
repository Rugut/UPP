
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
	///<summary>
	///(Упр) Магнитные и штриховые карты.
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ИнформационныеКарты:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d48a9040-ce93-4dd7-86c6-e0e6b848fea5");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190834.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*50*/ Наименование {get;set;}
		public string/*(100)*/ КодКарты {get;set;}//Код карты
		public object ВладелецКарты {get;set;}//Владелец карты
		public V82.Перечисления/*Ссылка*/.ВидыИнформационныхКарт ВидКарты {get;set;}//Вид карты
		public V82.Перечисления/*Ссылка*/.ТипыИнформационныхКарт ТипКарты {get;set;}//Тип карты
		public object ТипШтрихКода {get;set;}//Тип штрих кода
		public V82.СправочникиСсылка.ВидыДисконтныхКарт ВидДисконтнойКарты {get;set;}//Вид дисконтной карты
		
		public ИнформационныеКарты()
		{
		}
		
		public ИнформационныеКарты(byte[] УникальныйИдентификатор)
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
					,_Fld2351 [КодКарты]
					,_Fld2352_TYPE [ВладелецКарты_Тип],_Fld2352_RRRef [ВладелецКарты],_Fld2352_RTRef [ВладелецКарты_Вид]
					,_Fld2353RRef [ВидКарты]
					,_Fld2354RRef [ТипКарты]
					,_Fld2355RRef [ТипШтрихКода]
					,_Fld2356RRef [ВидДисконтнойКарты]
					From _Reference105(NOLOCK)
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
							КодКарты = Читалка.GetString(6);
							ВидКарты = V82.Перечисления/*Ссылка*/.ВидыИнформационныхКарт.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							ТипКарты = V82.Перечисления/*Ссылка*/.ТипыИнформационныхКарт.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
							ВидДисконтнойКарты = new V82.СправочникиСсылка.ВидыДисконтныхКарт((byte[])Читалка.GetValue(13));
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
		
		public V82.СправочникиОбъект.ИнформационныеКарты  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ИнформационныеКарты();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.КодКарты = КодКарты;
			Объект.ВладелецКарты = ВладелецКарты;
			Объект.ВидКарты = ВидКарты;
			Объект.ТипКарты = ТипКарты;
			Объект.ТипШтрихКода = ТипШтрихКода;
			Объект.ВидДисконтнойКарты = ВидДисконтнойКарты;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ИнформационныеКарты ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ИнформационныеКарты)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ИнформационныеКарты(УникальныйИдентификатор);
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