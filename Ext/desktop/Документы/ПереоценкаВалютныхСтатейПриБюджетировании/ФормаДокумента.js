Ext.define('Документы.ПереоценкаВалютныхСтатейПриБюджетировании.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:356px;height:238px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переоценка валютных статей при бюджетировании',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:162px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 240,
			height: 19,
			style: 'position:absolute;left:108px;top:162px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:186px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 240,
			height: 19,
			style: 'position:absolute;left:108px;top:186px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата переоценки:',
			style: 'position:absolute;left:8px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаПереоценки',
			width: 99,
			height: 19,
			style: 'position:absolute;left:108px;top:81px;width:99px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Сценарий',
			width: 240,
			height: 19,
			style: 'position:absolute;left:108px;top:57px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Счет отнесения курсовых разниц:',
			style: 'position:absolute;left:8px;top:105px;width:100px;height:28px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СчетОтнесенияКурсовыхРазниц',
			width: 99,
			height: 19,
			style: 'position:absolute;left:108px;top:105px;width:99px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПолеВвода2',
			width: 240,
			height: 19,
			style: 'position:absolute;left:108px;top:138px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Статья оборотов:',
			style: 'position:absolute;left:8px;top:138px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 72,
			height: 19,
			style: 'position:absolute;left:108px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Дата:',
			style: 'position:absolute;left:182px;top:33px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 132,
			height: 19,
			style: 'position:absolute;left:216px;top:33px;width:132px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:356px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:213px;width:356px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});