Ext.define('Документы.ПлатежноеПоручениеВходящее.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:456px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Платежное поручение входящее',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьРегНомер',
			text: 'Рег. номер:',
			style: 'position:absolute;left:8px;top:32px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОТ',
			text: 'от:',
			style: 'position:absolute;left:178px;top:32px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:80px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчет',
			text: 'Банковский счет:',
			style: 'position:absolute;left:336px;top:80px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:426px;top:80px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлательщик',
			text: 'Плательщик:',
			style: 'position:absolute;left:8px;top:104px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчетПлательщика',
			text: 'Банковский счет:',
			style: 'position:absolute;left:336px;top:105px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКонтрагента',
			style: 'position:absolute;left:426px;top:104px;width:218px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'КУД и Р...',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Показать/скрыть счета учета',
				},
				{
					text:'Клиент-Банк: Создать контрагента',
				},
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:431px;width:652px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:196px;top:56px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийДокументОт',
			text: 'от:',
			style: 'position:absolute;left:178px;top:56px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'Вх. номер:',
			style: 'position:absolute;left:8px;top:56px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:96px;top:56px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтразитьВ',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:32px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:636px;height:202px;',
			height: 202,width: 636,
			items:
			[
				{
					title:'ПлатежПоОднойСделке',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:',
			style: 'position:absolute;left:328px;top:0px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:328px;top:48px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:0px;top:24px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяДДС',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:120px;width:80px;height:31px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: '% НДС:',
			style: 'position:absolute;left:0px;top:48px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:72px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:88px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:88px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:88px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:88px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:88px;top:120px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:418px;top:0px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:418px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья1',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:1px;width:82px;height:27px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:260px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежа',
			style: 'position:absolute;left:418px;top:120px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапланировано',
			text: 'Запланировано:',
			style: 'position:absolute;left:328px;top:120px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:88px;top:96px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:96px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапланированоПрочее',
			text: 'Запланировано:',
			style: 'position:absolute;left:328px;top:1px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект1',
			text: 'Проект:',
			style: 'position:absolute;left:328px;top:24px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПлан',
			style: 'position:absolute;left:418px;top:144px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПлан',
			text: 'План. курс.:',
			style: 'position:absolute;left:328px;top:144px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПлан',
			style: 'position:absolute;left:418px;top:168px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПлан',
			text: 'План. сумма платежа',
			style: 'position:absolute;left:328px;top:168px;width:90px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:328px;top:72px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:328px;top:96px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:418px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:418px;top:96px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:418px;top:24px;width:218px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:328px;top:28px;width:90px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентомНУ',
			text: 'Счет НУ:',
			style: 'position:absolute;left:328px;top:76px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУКт1',
			text: 'Субконто НУ Кт1:',
			style: 'position:absolute;left:328px;top:100px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУКт2',
			text: 'Субконто НУ Кт2:',
			style: 'position:absolute;left:328px;top:124px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУКт3',
			text: 'Субконто НУ Кт3:',
			style: 'position:absolute;left:328px;top:148px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорВалюта1',
			text: 'Договор:',
			style: 'position:absolute;left:11px;top:6px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов2',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:322px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Ном. группа:',
			style: 'position:absolute;left:321px;top:6px;width:91px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаЗатратНУ',
			text: 'Счет затрат НУ:',
			style: 'position:absolute;left:321px;top:78px;width:91px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентомБУ',
			text: 'Счет БУ:',
			style: 'position:absolute;left:0px;top:76px;width:84px;height:19px;',
		},
					]
				},
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:636px;height:151px;',
			height: 151,width: 636,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Договор контрагента',
					width:'100',
				},
				{
					text:'Сделка',
					width:'100',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
				},
				{
					text:'Сумма платежа',
					width:'100',
				},
				{
					text:'Курс взаиморасчетов',
					width:'100',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
				},
				{
					text:'% НДС',
					width:'64',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'100',
				},
				{
					text:'Счет учета расчетов по авансам',
					width:'100',
				},
				{
					text:'Статья движения денежных средств',
					width:'100',
				},
				{
					text:'Планируемое поступление',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
				{
					text:'Курс взаиморасчетов по документу планирования',
					width:'100',
				},
				{
					text:'Сумма платежа по документу планирования',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:319px;height:24px;',
			items:
			[
				'-',
				{
					text:'&Скопировать',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:334px;top:21px;width:302px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяДДСВалюта1',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:11px;top:51px;width:84px;height:30px;',
		},
					]
				},
				{
					title:'ПлатежПрочие',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредствПрочие',
			style: 'position:absolute;left:88px;top:1px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаПрочие',
			style: 'position:absolute;left:418px;top:1px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект1',
			style: 'position:absolute;left:418px;top:24px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомНУ',
			style: 'position:absolute;left:416px;top:76px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУКт1',
			style: 'position:absolute;left:416px;top:100px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУКт2',
			style: 'position:absolute;left:416px;top:124px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУКт3',
			style: 'position:absolute;left:416px;top:148px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомБУ',
			style: 'position:absolute;left:88px;top:76px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт1',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:0px;top:100px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:88px;top:100px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт2',
			text: 'Субконто Кт2:',
			style: 'position:absolute;left:0px;top:124px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:88px;top:124px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт3',
			text: 'Субконто Кт3:',
			style: 'position:absolute;left:0px;top:148px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:88px;top:148px;width:219px;height:19px;',
		},
					]
				},
				{
					title:'Оплата по платежным картам',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента2',
			style: 'position:absolute;left:95px;top:6px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств2',
			style: 'position:absolute;left:95px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодборДоговораВалюта1',
			text: 'Подбор',
			style: 'position:absolute;left:268px;top:6px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект3',
			style: 'position:absolute;left:95px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежа2',
			style: 'position:absolute;left:420px;top:30px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапланированоВалюта1',
			text: 'Запланировано:',
			style: 'position:absolute;left:322px;top:30px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПлан2',
			style: 'position:absolute;left:420px;top:54px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПлан2',
			text: 'План. сумма платежа',
			style: 'position:absolute;left:322px;top:54px;width:92px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом2',
			style: 'position:absolute;left:420px;top:6px;width:100px;height:19px;',
		},
					]
				},
				{
					title:'Учет затрат',
					items:
					[
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:194px;top:24px;width:113px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:13px;top:6px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:97px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:418px;top:6px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеЗатраты',
			text: 'Подразделение:',
			style: 'position:absolute;left:13px;top:30px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеЗатраты',
			style: 'position:absolute;left:97px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаУслуг',
			text: 'Сумма услуг:',
			style: 'position:absolute;left:13px;top:54px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаУслуг',
			style: 'position:absolute;left:97px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизацииЗатраты',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:321px;top:29px;width:91px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизацииЗатраты',
			style: 'position:absolute;left:418px;top:30px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаЗатрат',
			text: 'Счет затрат:',
			style: 'position:absolute;left:13px;top:78px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаЗатрат',
			style: 'position:absolute;left:97px;top:78px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтЗатраты1',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:13px;top:102px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтЗатраты1',
			style: 'position:absolute;left:97px;top:102px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтЗатраты2',
			text: 'Субконто Кт2:',
			style: 'position:absolute;left:13px;top:126px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтЗатраты2',
			style: 'position:absolute;left:97px;top:126px;width:219px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтЗатраты3',
			text: 'Субконто Кт3:',
			style: 'position:absolute;left:13px;top:150px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтЗатраты3',
			style: 'position:absolute;left:97px;top:150px;width:219px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаЗатратНУ',
			style: 'position:absolute;left:418px;top:78px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУКтЗатраты1',
			text: 'Субконто НУ Кт1:',
			style: 'position:absolute;left:321px;top:102px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУКтЗатраты1',
			style: 'position:absolute;left:418px;top:102px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУКтЗатраты2',
			text: 'Субконто НУ Кт2:',
			style: 'position:absolute;left:321px;top:126px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУКтЗатраты2',
			style: 'position:absolute;left:418px;top:126px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУКтЗатраты3',
			text: 'Субконто НУ Кт3:',
			style: 'position:absolute;left:321px;top:150px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУКтЗатраты3',
			style: 'position:absolute;left:418px;top:150px;width:212px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма:',
			style: 'position:absolute;left:8px;top:128px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:96px;top:128px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:202px;top:128px;width:42px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:336px;top:56px;width:308px;height:19px;',
			height: 19,width: 308,
			items:
			[
				{
					title:'СтраницаОплата',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Оплачено:',
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:90px;top:0px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаЧастичнаяОплата',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЧастичнаяОплата',
			text: 'Частичная оплата',
			style: 'position:absolute;left:0px;top:0px;width:308px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'опер. учете',
			style: 'position:absolute;left:426px;top:32px;width:74px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:502px;top:32px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:572px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:337px;top:128px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:380px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:380px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:380px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:380px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:404px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:404px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНазначениеПлатежа',
			text: 'Назначение платежа:',
			style: 'position:absolute;left:8px;top:355px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеПлатежа',
			style: 'position:absolute;left:96px;top:356px;width:548px;height:19px;',
		},
	]
});