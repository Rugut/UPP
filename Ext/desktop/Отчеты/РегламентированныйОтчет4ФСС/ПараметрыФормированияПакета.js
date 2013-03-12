Ext.define('Отчеты.РегламентированныйОтчет4ФСС.ПараметрыФормированияПакета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:584px;height:120px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры формирования пакета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:95px;width:584px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отмена',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сертификат страхователя:',
			style: 'position:absolute;left:8px;top:10px;width:139px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатСтрахователяПредставление',
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
			name: 'СертификатФССПредставление',
			style: 'position:absolute;left:157px;top:34px;width:419px;height:19px;',
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
			name: 'КаталогВыгрузки',
			style: 'position:absolute;left:157px;top:68px;width:419px;height:19px;',
		},
	]
});