Ext.require(['Данные.Отчеты.РегламентированныйОтчет4ФСС'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчет4ФСС.ПараметрыФормированияПакета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:584px;height:120px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры формирования пакета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сертификат страхователя:',
			style: 'position:absolute;left:8px;top:10px;width:139px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СертификатСтрахователяПредставление',
			width: 419,
			height: 19,
			style: 'position:absolute;left:157px;top:8px;width:419px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Сертификат ФСС:',
			style: 'position:absolute;left:8px;top:37px;width:139px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СертификатФССПредставление',
			width: 419,
			height: 19,
			style: 'position:absolute;left:157px;top:34px;width:419px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:60px;width:568px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Каталог выгрузки:',
			style: 'position:absolute;left:8px;top:71px;width:139px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КаталогВыгрузки',
			width: 419,
			height: 19,
			style: 'position:absolute;left:157px;top:68px;width:419px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:95px;width:584px;height:25px;',
			width: 584,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});