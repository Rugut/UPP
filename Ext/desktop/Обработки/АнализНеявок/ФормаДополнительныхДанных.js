Ext.define('Обработки.АнализНеявок.ФормаДополнительныхДанных',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:610px;height:215px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление по больничному листу: дополнительные данные',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:594px;height:174px;',
			height: 174,width: 594,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'НачислениеПоБЛ',
			width: 200,
			height: 19,
			style: 'position:absolute;left:80px;top:78px;width:200px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНарушенияРежима',
			width: 88,
			height: 19,
			style: 'position:absolute;left:235px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНарушенияРежима1',
			text: 'Снизить пособие за нарушение режима с:',
			style: 'position:absolute;left:6px;top:6px;width:224px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			width: 90,
			height: 19,
			style: 'position:absolute;left:117px;top:129px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			width: 90,
			height: 19,
			style: 'position:absolute;left:233px;top:129px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало',
			text: 'Расчетный период с:',
			style: 'position:absolute;left:6px;top:129px;width:109px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по',
			style: 'position:absolute;left:214px;top:129px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:330px;top:129px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Для пособия:',
			style: 'position:absolute;left:6px;top:78px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:294px;top:78px;width:281px;height:19px;',
			height: 19,width: 281,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидРасчетаДоплаты',
			width: 200,
			height: 19,
			style: 'position:absolute;left:75px;top:0px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчетаДоплаты',
			text: 'Для доплаты:',
			style: 'position:absolute;left:0px;top:0px;width:75px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'При расчете использовать начисления:',
			style: 'position:absolute;left:6px;top:56px;width:580px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Доплачивать до полного среднего заработка',
			style: 'position:absolute;left:6px;top:30px;width:255px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Расчет среднего заработка:',
			style: 'position:absolute;left:6px;top:105px;width:580px;height:16px;',
		},
					]
				},
				{
					title:'Данные о льготах',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты2',
			text: 'Процент оплаты от среднего заработка:',
			style: 'position:absolute;left:6px;top:59px;width:208px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеПособия2',
			text: 'Ограничение заработка (пособия):',
			style: 'position:absolute;left:6px;top:84px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Расчет по страховому стажу',
			style: 'position:absolute;left:236px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыБезЛьгот1',
			style: 'position:absolute;left:236px;top:59px;width:57px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОграничениеПособияБезЛьгот1',
			width: 350,
			height: 19,
			style: 'position:absolute;left:236px;top:84px;width:350px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет',
			text: 'Страховой стаж без нестраховых периодов:',
			style: 'position:absolute;left:6px;top:34px;width:225px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажЛет',
			style: 'position:absolute;left:236px;top:34px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'месяцев',
			style: 'position:absolute;left:387px;top:34px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:324px;top:34px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет1',
			text: 'лет',
			style: 'position:absolute;left:299px;top:34px;width:21px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Данные о льготах',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Применять льготы при начислении пособия',
			style: 'position:absolute;left:6px;top:81px;width:389px;height:23px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты3',
			text: 'Процент оплаты от среднего заработка:',
			style: 'position:absolute;left:6px;top:29px;width:208px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:223px;top:29px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеПособия3',
			text: 'Ограничение размера пособия:',
			style: 'position:absolute;left:6px;top:54px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОграничениеПособия',
			width: 172,
			height: 19,
			style: 'position:absolute;left:223px;top:54px;width:172px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Расчет без льгот',
			style: 'position:absolute;left:414px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Расчет с использованием льгот',
			style: 'position:absolute;left:223px;top:6px;width:172px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплатыБезЛьгот2',
			style: 'position:absolute;left:414px;top:29px;width:57px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОграничениеПособияБезЛьгот2',
			width: 172,
			height: 19,
			style: 'position:absolute;left:414px;top:54px;width:172px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:190px;width:610px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});