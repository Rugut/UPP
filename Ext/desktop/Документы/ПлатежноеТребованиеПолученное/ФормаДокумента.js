Ext.define('Документы.ПлатежноеТребованиеПолученное.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Платежное требование полученное',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
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
			text: 'от',
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
			style: 'position:absolute;left:429px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель',
			text: 'Получатель:',
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
			name: 'НадписьБанковскийСчетПолучатель',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
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
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'КУД и Р...',
				},
				{
					text:'',
				},
				{
					text:'Клиент-Банк: Создать контрагента',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:657px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Печать',
				},
				'-',
				'-',
				'-',
				{
					text:'Записать',
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
			style: 'position:absolute;left:8px;top:152px;width:641px;height:196px;',
			height: 196,width: 641,
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
			style: 'position:absolute;left:0px;top:0px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтавкаНДС',
			text: '% НДС:',
			style: 'position:absolute;left:0px;top:48px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНДС',
			text: 'Сумма НДС:',
			style: 'position:absolute;left:0px;top:72px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:',
			style: 'position:absolute;left:329px;top:0px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма <нет валюты>:',
			style: 'position:absolute;left:329px;top:48px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетов',
			text: 'Курс:',
			style: 'position:absolute;left:0px;top:24px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:192px;top:24px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:421px;top:0px;width:220px;height:19px;',
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
			name: 'СуммаНДС',
			style: 'position:absolute;left:88px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:421px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:88px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:120px;width:88px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:88px;top:120px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатья1',
			text: 'Статья движ. ден. средств:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:88px;top:0px;width:167px;height:19px;',
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
			name: 'Проект',
			style: 'position:absolute;left:88px;top:96px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:96px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявка',
			text: 'Заявка:',
			style: 'position:absolute;left:329px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект1',
			text: 'Проект:',
			style: 'position:absolute;left:329px;top:24px;width:82px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежа',
			style: 'position:absolute;left:421px;top:120px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Заявка',
			text: 'Заявка:',
			style: 'position:absolute;left:329px;top:120px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетовПлан',
			style: 'position:absolute;left:421px;top:144px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКурсВзаиморасчетовПлан',
			text: 'Курс заявки:',
			style: 'position:absolute;left:329px;top:144px;width:69px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежаПлан',
			style: 'position:absolute;left:421px;top:168px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПлатежаПлан',
			text: 'Сумма платежа по заявке:',
			style: 'position:absolute;left:329px;top:168px;width:90px;height:28px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурсаЗаявки',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:533px;top:144px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:329px;top:72px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:329px;top:96px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:421px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:421px;top:96px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:421px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:329px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентомНУ',
			text: 'Счет НУ:',
			style: 'position:absolute;left:329px;top:65px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт1',
			text: 'Субконто НУ Дт1:',
			style: 'position:absolute;left:329px;top:89px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт2',
			text: 'Субконто НУ Дт2:',
			style: 'position:absolute;left:329px;top:113px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоНУДт3',
			text: 'Субконто НУ Дт3:',
			style: 'position:absolute;left:329px;top:137px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:641px;height:147px;',
			height: 147,width: 641,
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
					text:'Заявка на расходование',
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
			style: 'position:absolute;left:0px;top:21px;width:294px;height:24px;',
			items:
			[
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Подбор',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Скопировать',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:329px;top:21px;width:312px;height:19px;',
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
			style: 'position:absolute;left:88px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПланированияПлатежаПрочие',
			style: 'position:absolute;left:421px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект1',
			style: 'position:absolute;left:421px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:65px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчета',
			style: 'position:absolute;left:88px;top:65px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт1',
			text: 'Субконто Дт1:',
			style: 'position:absolute;left:0px;top:89px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1',
			style: 'position:absolute;left:88px;top:89px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт2',
			text: 'Субконто Дт2:',
			style: 'position:absolute;left:0px;top:113px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт2',
			style: 'position:absolute;left:88px;top:113px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт3',
			text: 'Субконто Дт3:',
			style: 'position:absolute;left:0px;top:137px;width:78px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт3',
			style: 'position:absolute;left:88px;top:137px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомНУ',
			style: 'position:absolute;left:421px;top:65px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт1',
			style: 'position:absolute;left:421px;top:89px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт2',
			style: 'position:absolute;left:421px;top:113px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУДт3',
			style: 'position:absolute;left:421px;top:137px;width:220px;height:19px;',
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
			style: 'position:absolute;left:199px;top:128px;width:40px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:336px;top:56px;width:313px;height:19px;',
			height: 19,width: 313,
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
			style: 'position:absolute;left:93px;top:0px;width:88px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:313px;height:19px;',
		},
					]
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
			style: 'position:absolute;left:179px;top:56px;width:16px;height:19px;',
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
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:336px;top:128px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:374px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:374px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:374px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:429px;top:374px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:398px;width:553px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:80px;height:19px;',
		},
	]
});