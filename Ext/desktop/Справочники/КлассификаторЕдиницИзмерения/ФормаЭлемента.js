Ext.require(['Данные.Справочники.КлассификаторЕдиницИзмерения'], function () 
{
	Ext.define('Справочники.КлассификаторЕдиницИзмерения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:401px;height:136px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Элемент Классификатор единиц измерения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:236px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 233,
			height: 19,
			style: 'position:absolute;left:160px;top:33px;width:233px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 233,
			height: 19,
			style: 'position:absolute;left:160px;top:84px;width:233px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:204px;top:57px;width:32px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Краткое наименование:',
			style: 'position:absolute;left:8px;top:33px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:84px;width:152px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:401px;height:25px;',
			width: 401,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МеждународноеСокращение',
			width: 40,
			height: 19,
			style: 'position:absolute;left:160px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМеждународноеСокращенеие',
			text: 'Международное сокращение:',
			style: 'position:absolute;left:8px;top:57px;width:152px;height:19px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:111px;width:401px;height:25px;',
			width: 401,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
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