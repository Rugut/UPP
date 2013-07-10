Ext.define('Отчеты.РегламентированныйОтчетВода.ФормаВводаЛицензии',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:212px;height:160px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Лицензия на водопользование',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьПолеВводаСерия',
			text: 'Серия:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаСерия',
			width: 105,
			height: 19,
			style: 'position:absolute;left:99px;top:33px;width:105px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВводаНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаНомер',
			width: 105,
			height: 19,
			style: 'position:absolute;left:99px;top:57px;width:105px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВводаВид',
			text: 'Вид:',
			style: 'position:absolute;left:8px;top:81px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаВид',
			width: 105,
			height: 19,
			style: 'position:absolute;left:99px;top:81px;width:105px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВводаПредставление',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:108px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ПолеВводаПредставление',
			text: '',
			style: 'position:absolute;left:99px;top:108px;width:105px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:212px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Очистить',
				},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:135px;width:212px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});