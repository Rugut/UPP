Ext.define('Документы.ПлатежноеТребованиеВыставленное.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:477px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Платежное требование выставленное',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОТ',
			text: 'от',
			style: 'position:absolute;left:174px;top:32px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:80px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:80px;width:220px;height:19px;',
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
			style: 'position:absolute;left:429px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлательщик',
			text: 'Плательщик:',
			style: 'position:absolute;left:8px;top:104px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:92px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанковскийСчетПлательщика',
			text: 'Банковский счет:',
			style: 'position:absolute;left:336px;top:104px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКонтрагента',
			style: 'position:absolute;left:429px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:641px;height:247px;',
			height: 247,width: 641,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:30px;width:627px;height:195px;',
			height: 195,width: 627,
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
			style: 'position:absolute;left:0px;top:0px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: '% НДС:',
			style: 'position:absolute;left:0px;top:48px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:72px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:',
			style: 'position:absolute;left:321px;top:0px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокументРасчеты',
			text: 'Сумма:',
			style: 'position:absolute;left:321px;top:48px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:0px;top:25px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:183px;top:24px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:414px;top:0px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:77px;top:24px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:77px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокументаРасчеты',
			style: 'position:absolute;left:414px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:77px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:120px;width:74px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:77px;top:120px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:77px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья1',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:322px;top:48px;width:72px;height:27px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:249px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:77px;top:96px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:96px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПлан',
			text: 'План:',
			style: 'position:absolute;left:322px;top:0px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект1',
			text: 'Проект:',
			style: 'position:absolute;left:322px;top:24px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежа1',
			style: 'position:absolute;left:414px;top:120px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗапланировано',
			text: 'Запланировано:',
			style: 'position:absolute;left:321px;top:120px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПлан',
			style: 'position:absolute;left:414px;top:144px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПлан',
			text: 'План. курс.:',
			style: 'position:absolute;left:321px;top:144px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПлан',
			style: 'position:absolute;left:414px;top:168px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПлан',
			text: 'План. сумма платежа',
			style: 'position:absolute;left:321px;top:168px;width:87px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурсаЗаявки',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:519px;top:144px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетов',
			text: 'USD',
			style: 'position:absolute;left:521px;top:48px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:321px;top:72px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:321px;top:96px;width:93px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:414px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:414px;top:96px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:414px;top:24px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:321px;top:24px;width:93px;height:19px;',
		},
					]
				},
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:627px;height:144px;',
			height: 144,width: 627,
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
					width:'105',
				},
				{
					text:'Курс взаиморасчетов',
					width:'79',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'116',
				},
				{
					text:'% НДС',
					width:'53',
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
			style: 'position:absolute;left:0px;top:21px;width:310px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'Закончить редактирование',
				},
				{
					text:'Заполнить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:322px;top:21px;width:305px;height:19px;',
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
			style: 'position:absolute;left:414px;top:48px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаПрочие',
			style: 'position:absolute;left:414px;top:0px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект1',
			style: 'position:absolute;left:414px;top:24px;width:213px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчета',
			style: 'position:absolute;left:77px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт1',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:0px;top:24px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:77px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт2',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:0px;top:48px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:77px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт3',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:0px;top:72px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:77px;top:72px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумент',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:83px;top:6px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:187px;top:7px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУсловиеОплаты',
			text: 'Условие оплаты:',
			style: 'position:absolute;left:6px;top:6px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокДляАкцепта',
			text: 'Срок для акцепта:',
			style: 'position:absolute;left:193px;top:6px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтсылкиДокументов',
			text: 'Дата отсылки документов:',
			style: 'position:absolute;left:341px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОснованиеДляБезакцептногоСписания',
			text: 'Основание для безакцептного списания:',
			style: 'position:absolute;left:6px;top:55px;width:90px;height:43px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:327px;top:6px;width:89px;height:19px;',
		},
					]
				},
				{
					title:'Условия платежа',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УсловиеОплаты',
			style: 'position:absolute;left:96px;top:7px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокДляАкцепта',
			style: 'position:absolute;left:288px;top:6px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтсылкиДокументов',
			style: 'position:absolute;left:496px;top:6px;width:137px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОснованиеДляБезакцептногоСписания',
			style: 'position:absolute;left:96px;top:54px;width:537px;height:44px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидАкцепта',
			text: 'Вид акцепта:',
			style: 'position:absolute;left:6px;top:30px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'Печать',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НазначениеПлатежа',
			style: 'position:absolute;left:83px;top:145px;width:552px;height:54px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ТекстПлательщика',
			style: 'position:absolute;left:194px;top:20px;width:441px;height:40px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ТекстПолучателя',
			style: 'position:absolute;left:194px;top:80px;width:441px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННПлательщика',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:20px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННПлательщика',
			style: 'position:absolute;left:83px;top:20px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННПолучателя',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:80px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННПолучателя',
			style: 'position:absolute;left:83px;top:80px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьИННПлательщика',
			text: '',
			style: 'position:absolute;left:173px;top:20px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьИННПолучателя',
			text: '',
			style: 'position:absolute;left:173px;top:80px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'кнЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:3px;top:145px;width:77px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'КУД и Р...',
				},
				'-',
				'-',
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Клиент-Банк: Создать контрагента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:452px;width:657px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтразитьВ',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:32px;width:88px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:304px;height:19px;',
			height: 19,width: 304,
			items:
			[
				{
					title:'СтраницаОплата',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Оплачено:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:84px;top:0px;width:80px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:304px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидПлатежа',
			text: 'Вид платежа:',
			style: 'position:absolute;left:491px;top:56px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОчередность',
			text: 'Очередность:',
			style: 'position:absolute;left:336px;top:56px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОчередностьПлатежа',
			style: 'position:absolute;left:429px;top:56px;width:57px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПлатежа',
			style: 'position:absolute;left:562px;top:56px;width:87px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'опер. учете',
			style: 'position:absolute;left:429px;top:32px;width:74px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:506px;top:32px;width:70px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:577px;top:32px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:401px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:92px;top:401px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:401px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:429px;top:401px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:425px;width:557px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:425px;width:80px;height:19px;',
		},
	]
});