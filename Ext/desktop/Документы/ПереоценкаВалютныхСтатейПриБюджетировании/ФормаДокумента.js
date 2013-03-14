Ext.define('Документы.ПереоценкаВалютныхСтатейПриБюджетировании.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:356px;height:238px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переоценка валютных статей при бюджетировании',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:356px;height:25px;',
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
			items:
			[
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
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:162px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:108px;top:162px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:186px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:108px;top:186px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата переоценки:',
			style: 'position:absolute;left:8px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПереоценки',
			style: 'position:absolute;left:108px;top:81px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
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
			style: 'position:absolute;left:8px;top:105px;width:100px;height:28px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОтнесенияКурсовыхРазниц',
			style: 'position:absolute;left:108px;top:105px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
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
			style: 'position:absolute;left:8px;top:33px;width:37px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:108px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Дата:',
			style: 'position:absolute;left:182px;top:33px;width:31px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:216px;top:33px;width:132px;height:19px;',
		},
	]
});