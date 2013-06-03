
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
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ОтчетОРозничныхПродажах:ДокументОбъект
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
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.КассыККМ КассаККМ {get;set;}//Касса ККМ
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.ДокументыСсылка.ИнвентаризацияТоваровНаСкладе ИнвентаризацияТоваровНаСкладе {get;set;}//Инвентаризация товаров на складе
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.СтатьиДвиженияДенежныхСредств СтатьяДвиженияДенежныхСредств {get;set;}//Статья движения денежных средств
		[DataMember]
		[ProtoMember(24)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийОтчетОРозничныхПродажах ВидОперации {get;set;}//Вид операции
		[DataMember]
		[ProtoMember(25)]
		public object Проект {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		[DataMember]
		[ProtoMember(27)]
		public V82.СправочникиСсылка.ДоговорыЭквайринга ДоговорЭквайринга {get;set;}//Договор эквайринга
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Контрагенты Эквайрер {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорВзаиморасчетовЭквайрера {get;set;}//Договор взаиморасчетов эквайрера
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public object СчетУчетаРасчетовСЭквайрером {get;set;}//Счет учета расчетов с эквайрером
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
						Insert Into _Document477(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11621RRef
						,_Fld11622
						,_Fld11623RRef
						,_Fld11624
						,_Fld11625
						,_Fld11626
						,_Fld11627RRef
						,_Fld11628
						,_Fld11629RRef
						,_Fld11630RRef
						,_Fld11631
						,_Fld11632
						,_Fld11633RRef
						,_Fld11634RRef
						,_Fld11635RRef
						,_Fld11636RRef
						,_Fld11638RRef
						,_Fld11639RRef
						,_Fld11640RRef
						,_Fld11641RRef
						,_Fld11642RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@КассаККМ
						,@Комментарий
						,@Организация
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВНалоговомУчете
						,@Подразделение
						,@СуммаДокумента
						,@ИнвентаризацияТоваровНаСкладе
						,@ТипЦен
						,@СуммаВключаетНДС
						,@УчитыватьНДС
						,@Склад
						,@Ответственный
						,@СтатьяДвиженияДенежныхСредств
						,@ВидОперации
						,@УсловиеПродаж
						,@ДоговорЭквайринга
						,@Эквайрер
						,@ДоговорВзаиморасчетовЭквайрера
						,@СчетУчетаРасчетовСЭквайрером)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document477
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11621RRef	= @КассаККМ
						,_Fld11622	= @Комментарий
						,_Fld11623RRef	= @Организация
						,_Fld11624	= @ОтражатьВБухгалтерскомУчете
						,_Fld11625	= @ОтражатьВУправленческомУчете
						,_Fld11626	= @ОтражатьВНалоговомУчете
						,_Fld11627RRef	= @Подразделение
						,_Fld11628	= @СуммаДокумента
						,_Fld11629RRef	= @ИнвентаризацияТоваровНаСкладе
						,_Fld11630RRef	= @ТипЦен
						,_Fld11631	= @СуммаВключаетНДС
						,_Fld11632	= @УчитыватьНДС
						,_Fld11633RRef	= @Склад
						,_Fld11634RRef	= @Ответственный
						,_Fld11635RRef	= @СтатьяДвиженияДенежныхСредств
						,_Fld11636RRef	= @ВидОперации
						,_Fld11638RRef	= @УсловиеПродаж
						,_Fld11639RRef	= @ДоговорЭквайринга
						,_Fld11640RRef	= @Эквайрер
						,_Fld11641RRef	= @ДоговорВзаиморасчетовЭквайрера
						,_Fld11642RRef	= @СчетУчетаРасчетовСЭквайрером
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("ИнвентаризацияТоваровНаСкладе", ИнвентаризацияТоваровНаСкладе.Ссылка);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСЭквайрером", Guid.Empty);
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
					Команда.CommandText = @"Delete _Document477
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}