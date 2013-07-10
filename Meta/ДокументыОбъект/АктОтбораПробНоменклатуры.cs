
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class АктОтбораПробНоменклатуры:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийАктОтбораПробНоменклатуры ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(10)]
		public string/*(5)*/ Влажность {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public string/*(200)*/ ЗамечанияКУпаковкеМаркировке {get;set;}//Замечания к упаковке и маркировке
		///<summary>
		///Заявка на сертификацию, на основании которой берутся пробы
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.ДокументыСсылка.ЗаявкаНаСертификациюНоменклатуры ЗаявкаНаСертификациюНоменклатуры {get;set;}//Заявка на сертификацию номенклатуры
		///<summary>
		///Количество отобранных образцов на испытания
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(15.3)*/ Испытания {get;set;}
		///<summary>
		///Количество групповых упаковок, вскрытых для отбора проб
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(10.3)*/ КоличествоВскрытыхУпаковок {get;set;}//Количество вскрытых упаковок
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Количество образцов контрольной пробы
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.3)*/ КонтрольнаяПроба {get;set;}//Контрольная проба
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Номенклатура Номенклатура {get;set;}
		///<summary>
		///Нормативный документ, согласно которому осуществляется сертификация (для внутренней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.НормативныеДокументыСертификацииНоменклатуры НормативныйДокумент {get;set;}//Нормативный документ
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Организация, проводящая отбор проб (для внешней сертификации)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Контрагенты ОрганПоСертификации {get;set;}//Орган по сертификации
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public string/*(200)*/ РезультатНаружногоОсмотра {get;set;}//Результат наружного осмотра
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.СерииНоменклатуры СерияНоменклатуры {get;set;}//Серия номенклатуры
		///<summary>
		///Склад, с которого производится отбор проб
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public string/*(5)*/ Температура {get;set;}
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document206(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld2692RRef
						,_Fld2693
						,_Fld2694
						,_Fld2695RRef
						,_Fld2696
						,_Fld2697
						,_Fld2698
						,_Fld2699
						,_Fld2700RRef
						,_Fld2701RRef
						,_Fld2702RRef
						,_Fld2703RRef
						,_Fld2704RRef
						,_Fld2705RRef
						,_Fld2706
						,_Fld2707RRef
						,_Fld2708RRef
						,_Fld2709)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@Влажность
						,@ЗамечанияКУпаковкеМаркировке
						,@ЗаявкаНаСертификациюНоменклатуры
						,@Испытания
						,@КоличествоВскрытыхУпаковок
						,@Комментарий
						,@КонтрольнаяПроба
						,@Номенклатура
						,@НормативныйДокумент
						,@Организация
						,@ОрганПоСертификации
						,@Ответственный
						,@Подразделение
						,@РезультатНаружногоОсмотра
						,@СерияНоменклатуры
						,@Склад
						,@Температура)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document206
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld2692RRef	= @ВидОперации
						,_Fld2693	= @Влажность
						,_Fld2694	= @ЗамечанияКУпаковкеМаркировке
						,_Fld2695RRef	= @ЗаявкаНаСертификациюНоменклатуры
						,_Fld2696	= @Испытания
						,_Fld2697	= @КоличествоВскрытыхУпаковок
						,_Fld2698	= @Комментарий
						,_Fld2699	= @КонтрольнаяПроба
						,_Fld2700RRef	= @Номенклатура
						,_Fld2701RRef	= @НормативныйДокумент
						,_Fld2702RRef	= @Организация
						,_Fld2703RRef	= @ОрганПоСертификации
						,_Fld2704RRef	= @Ответственный
						,_Fld2705RRef	= @Подразделение
						,_Fld2706	= @РезультатНаружногоОсмотра
						,_Fld2707RRef	= @СерияНоменклатуры
						,_Fld2708RRef	= @Склад
						,_Fld2709	= @Температура
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("Влажность", Влажность);
					Команда.Parameters.AddWithValue("ЗамечанияКУпаковкеМаркировке", ЗамечанияКУпаковкеМаркировке);
					Команда.Parameters.AddWithValue("ЗаявкаНаСертификациюНоменклатуры", ЗаявкаНаСертификациюНоменклатуры.Ссылка);
					Команда.Parameters.AddWithValue("Испытания", Испытания);
					Команда.Parameters.AddWithValue("КоличествоВскрытыхУпаковок", КоличествоВскрытыхУпаковок);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КонтрольнаяПроба", КонтрольнаяПроба);
					Команда.Parameters.AddWithValue("РезультатНаружногоОсмотра", РезультатНаружногоОсмотра);
					Команда.Parameters.AddWithValue("Температура", Температура);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document206
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}