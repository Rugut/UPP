Ext.require(['Данные.Справочники.ФизическиеЛица'], function () 
{
	Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиФИО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:306px;height:141px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Фамилия, имя, отчество физ. лица',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Запись действует с:',
			style: 'position:absolute;left:8px;top:89px;width:210px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Период',
			width: 80,
			height: 19,
			style: 'position:absolute;left:218px;top:89px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Фамилия:',
			style: 'position:absolute;left:8px;top:8px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 220,
			height: 19,
			style: 'position:absolute;left:78px;top:8px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Имя:',
			style: 'position:absolute;left:8px;top:30px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 220,
			height: 19,
			style: 'position:absolute;left:78px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Отчество:',
			style: 'position:absolute;left:8px;top:54px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 220,
			height: 19,
			style: 'position:absolute;left:78px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:78px;width:290px;height:6px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:116px;width:306px;height:25px;',
			width: 306,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'История...',
					tooltip:'',
				},
				'-',
				{
					text:'OK',
					tooltip:'',
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