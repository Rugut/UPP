
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ТипыЦенНоменклатурыКонтрагентов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("68a517dd-73ea-4b18-b0ef-67c2f4716904");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011946.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		public V82.СправочникиСсылка.Валюты ВалютаЦены {get;set;}//Валюта цены по умолчанию
		///<summary>
		///Истина - цена включает НДС, ложь - не включает
		///</summary>
		public bool ЦенаВключаетНДС {get;set;}//Цена включает НДС
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦеныНоменклатуры {get;set;}//Тип цены номенклатуры
		public string/*(0)*/ ОписаниеТипаЦеныНоменклатурыКонтрагента {get;set;}//Описание типа цены номенклатуры контрагента
		public string/*(0)*/ Комментарий {get;set;}
		
		public ТипыЦенНоменклатурыКонтрагентов()
		{
		}
		
		public ТипыЦенНоменклатурыКонтрагентов(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ТипыЦенНоменклатурыКонтрагентов(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld2119RRef [ВалютаЦены]
					,_Fld2120 [ЦенаВключаетНДС]
					,_Fld2121RRef [ТипЦеныНоменклатуры]
					,_Fld2122 [ОписаниеТипаЦеныНоменклатурыКонтрагента]
					,_Fld2123 [Комментарий]
					From _Reference182(NOLOCK)
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
							ВалютаЦены = new V82.СправочникиСсылка.Валюты((byte[])Читалка.GetValue(6),Глубина+1);
							ЦенаВключаетНДС = ((byte[])Читалка.GetValue(7))[0]==1;
							ТипЦеныНоменклатуры = new V82.СправочникиСсылка.ТипыЦенНоменклатуры((byte[])Читалка.GetValue(8),Глубина+1);
							ОписаниеТипаЦеныНоменклатурыКонтрагента = Читалка.GetString(9);
							Комментарий = Читалка.GetString(10);
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
		
		public V82.СправочникиОбъект.ТипыЦенНоменклатурыКонтрагентов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТипыЦенНоменклатурыКонтрагентов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВалютаЦены = ВалютаЦены;
			Объект.ЦенаВключаетНДС = ЦенаВключаетНДС;
			Объект.ТипЦеныНоменклатуры = ТипЦеныНоменклатуры;
			Объект.ОписаниеТипаЦеныНоменклатурыКонтрагента = ОписаниеТипаЦеныНоменклатурыКонтрагента;
			Объект.Комментарий = Комментарий;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов(УникальныйИдентификатор);
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