
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
	public partial class ТипыЦенНоменклатуры:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("725b7d92-00ad-4110-9079-687c435246ee");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012016.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаЦены {get;set;}//Валюта цены по умолчанию
		///<summary>
		///(Общ) Тип цен, от которого рассчитываются цены данного типа, если не выбран, то цены задаются вручную
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры БазовыйТипЦен {get;set;}//Базовый тип цен
		///<summary>
		///(Общ) Истина - цены автоматически рассчитываются (не хранятся) на основании цен базового типа
		///</summary>
		public bool Рассчитывается {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(5.2)*/ ПроцентСкидкиНаценки {get;set;}//Процент скидки или наценки по умолчанию
		///<summary>
		///(Общ) Истина - цена включает НДС, ложь - не включает
		///</summary>
		public bool ЦенаВключаетНДС {get;set;}//Цена включает НДС
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ПорядкиОкругления ПорядокОкругления {get;set;}//Порядок округления
		///<summary>
		///(Общ) Истина, то при порядке округления "5" 0.01 будет округлена до 5, ложь - округление по арифметическим правилам
		///</summary>
		public bool ОкруглятьВБольшуюСторону {get;set;}//Округлять в большую сторону
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаЦены СпособРасчетаЦены {get;set;}//Способ расчета цены
		
		public ТипыЦенНоменклатуры()
		{
		}
		
		public ТипыЦенНоменклатуры(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ТипыЦенНоменклатуры(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld2107RRef [ВалютаЦены]
					,_Fld2108RRef [БазовыйТипЦен]
					,_Fld2109 [Рассчитывается]
					,_Fld2110 [ПроцентСкидкиНаценки]
					,_Fld2111 [ЦенаВключаетНДС]
					,_Fld2112RRef [ПорядокОкругления]
					,_Fld2113 [ОкруглятьВБольшуюСторону]
					,_Fld2114 [Комментарий]
					,_Fld2115RRef [СпособРасчетаЦены]
					From _Reference181(NOLOCK)
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
								БазовыйТипЦен = new V82.СправочникиСсылка.ТипыЦенНоменклатуры((byte[])Читалка.GetValue(7),Глубина+1);
								Рассчитывается = ((byte[])Читалка.GetValue(8))[0]==1;
								ПроцентСкидкиНаценки = Читалка.GetDecimal(9);
								ЦенаВключаетНДС = ((byte[])Читалка.GetValue(10))[0]==1;
								ПорядокОкругления = V82.Перечисления/*Ссылка*/.ПорядкиОкругления.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
								ОкруглятьВБольшуюСторону = ((byte[])Читалка.GetValue(12))[0]==1;
								Комментарий = Читалка.GetString(13);
								СпособРасчетаЦены = V82.Перечисления/*Ссылка*/.СпособыРасчетаЦены.ПустаяСсылка.Получить((byte[])Читалка.GetValue(14));
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
		
		public V82.СправочникиОбъект.ТипыЦенНоменклатуры  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТипыЦенНоменклатуры();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВалютаЦены = ВалютаЦены;
			Объект.БазовыйТипЦен = БазовыйТипЦен;
			Объект.Рассчитывается = Рассчитывается;
			Объект.ПроцентСкидкиНаценки = ПроцентСкидкиНаценки;
			Объект.ЦенаВключаетНДС = ЦенаВключаетНДС;
			Объект.ПорядокОкругления = ПорядокОкругления;
			Объект.ОкруглятьВБольшуюСторону = ОкруглятьВБольшуюСторону;
			Объект.Комментарий = Комментарий;
			Объект.СпособРасчетаЦены = СпособРасчетаЦены;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ТипыЦенНоменклатуры ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ТипыЦенНоменклатуры)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ТипыЦенНоменклатуры(УникальныйИдентификатор);
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