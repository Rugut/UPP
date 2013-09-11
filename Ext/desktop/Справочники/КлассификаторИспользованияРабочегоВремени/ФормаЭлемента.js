Ext.require(['Данные.Справочники.КлассификаторИспользованияРабочегоВремени'], function () 
{
	Ext.define('Справочники.КлассификаторИспользованияРабочегоВремени.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:466px;height:194px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Классификатор использования рабочего времени',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:122px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 220,
			height: 19,
			style: 'position:absolute;left:130px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБуквенныйКод',
			text: 'Буквенное:',
			style: 'position:absolute;left:8px;top:142px;width:61px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БуквенныйКод',
			width: 28,
			height: 19,
			style: 'position:absolute;left:69px;top:142px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦифровойКод',
			text: 'Цифровое:',
			style: 'position:absolute;left:130px;top:142px;width:59px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЦифровойКод',
			width: 25,
			height: 19,
			style: 'position:absolute;left:189px;top:142px;width:25px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПолноеНаименование',
			style: 'position:absolute;left:130px;top:57px;width:220px;height:45px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:466px;height:25px;',
			width: 466,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'Условные обозначения (коды) использования рабочего времени',
			style: 'position:absolute;left:8px;top:121px;width:450px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рабочее время',
			style: 'position:absolute;left:360px;top:33px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолноеНаименование',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:57px;width:122px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:169px;width:466px;height:25px;',
			width: 466,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});