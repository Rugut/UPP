
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
	public partial class ПрофилиИзмененияПлановПоИзмерениям:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("33d713c4-d4be-4cbb-bfc1-ce09674bda5d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191638.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.Перечисления/*Ссылка*/.ВидыРаспределенийПоИзмерениямБюджетирования ВидРаспределения {get;set;}//Вид распределения
		///<summary>
		///Измерение бюджетирования
		///</summary>
		public V82.Перечисления/*Ссылка*/.ИзмеренияБюджетирования ИзмерениеБюджетирования {get;set;}//Измерение бюджетирования
		public V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования ИсточникДанных {get;set;}//Источник данных
		public string/*(50)*/ ПоказательИсточника {get;set;}//Показатель источника
		///<summary>
		///Значение будет распределяться по всем элементами справочника
		///</summary>
		public bool ПоВсемЭлементам {get;set;}//По всем элементам
		
		public ПрофилиИзмененияПлановПоИзмерениям()
		{
		}
		
		public ПрофилиИзмененияПлановПоИзмерениям(byte[] УникальныйИдентификатор)
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
					,_Fld3282RRef [ВидРаспределения]
					,_Fld3283RRef [ИзмерениеБюджетирования]
					,_Fld3284RRef [ИсточникДанных]
					,_Fld3285 [ПоказательИсточника]
					,_Fld3286 [ПоВсемЭлементам]
					From _Reference207(NOLOCK)
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
							ВидРаспределения = V82.Перечисления/*Ссылка*/.ВидыРаспределенийПоИзмерениямБюджетирования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							ИзмерениеБюджетирования = V82.Перечисления/*Ссылка*/.ИзмеренияБюджетирования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							ИсточникДанных = new V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования((byte[])Читалка.GetValue(8));
							ПоказательИсточника = Читалка.GetString(9);
							ПоВсемЭлементам = ((byte[])Читалка.GetValue(10))[0]==1;
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
		
		public V82.СправочникиОбъект.ПрофилиИзмененияПлановПоИзмерениям  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПрофилиИзмененияПлановПоИзмерениям();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВидРаспределения = ВидРаспределения;
			Объект.ИзмерениеБюджетирования = ИзмерениеБюджетирования;
			Объект.ИсточникДанных = ИсточникДанных;
			Объект.ПоказательИсточника = ПоказательИсточника;
			Объект.ПоВсемЭлементам = ПоВсемЭлементам;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ПрофилиИзмененияПлановПоИзмерениям ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ПрофилиИзмененияПлановПоИзмерениям)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ПрофилиИзмененияПлановПоИзмерениям(УникальныйИдентификатор);
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