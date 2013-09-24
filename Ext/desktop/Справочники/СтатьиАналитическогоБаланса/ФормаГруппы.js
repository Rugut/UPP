Ext.require(['Данные.Справочники.СтатьиАналитическогоБаланса'], function () 
{
	Ext.define('Справочники.СтатьиАналитическогоБаланса.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:486px;height:60px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Группа Статьи аналитического баланса',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:8px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 209,
			height: 19,
			style: 'position:absolute;left:94px;top:8px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код для отчета:',
			style: 'position:absolute;left:305px;top:8px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодДляОтчета',
			width: 81,
			height: 19,
			style: 'position:absolute;left:397px;top:8px;width:81px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:35px;width:486px;height:25px;',
			width: 486,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Записать объект и закрыть форму',
					iconCls:'x-WriteAndClose',
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