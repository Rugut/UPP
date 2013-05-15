Ext.define('Справочники.ТарифыБанковНаДенежныеПереводы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:168px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Тарифы банков',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:283px;top:33px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:312px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:181px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМинимальныйТариф',
			text: 'Минимальный тариф:',
			style: 'position:absolute;left:8px;top:91px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МинимальныйТариф',
			style: 'position:absolute;left:130px;top:91px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМаксимальныйТариф',
			text: 'Максимальный тариф:',
			style: 'position:absolute;left:8px;top:116px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МаксимальныйТариф',
			style: 'position:absolute;left:130px;top:116px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцент',
			text: 'Процент:',
			style: 'position:absolute;left:8px;top:62px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Процент',
			style: 'position:absolute;left:130px;top:62px;width:100px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:143px;width:400px;height:25px;',
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