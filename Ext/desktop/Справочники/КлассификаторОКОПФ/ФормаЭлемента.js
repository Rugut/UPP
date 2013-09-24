Ext.require(['Данные.Справочники.КлассификаторОКОПФ'], function () 
{
	Ext.define('Справочники.КлассификаторОКОПФ.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:130px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Классификатор ОКОПФ',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:290px;top:33px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 67,
			height: 19,
			style: 'position:absolute;left:325px;top:33px;width:67px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Краткое наименование:',
			style: 'position:absolute;left:8px;top:33px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 141,
			height: 19,
			style: 'position:absolute;left:140px;top:33px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:57px;width:127px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 252,
			height: 19,
			style: 'position:absolute;left:140px;top:57px;width:252px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включить элемент в список быстрого выбора',
			style: 'position:absolute;left:8px;top:82px;width:258px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			width: 400,
			height: 25,
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:105px;width:400px;height:25px;',
			width: 400,
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
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});