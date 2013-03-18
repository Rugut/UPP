Ext.define('Справочники.СпецификацииНоменклатуры.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:234px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать параметры выпуска продукции',
			style: 'position:absolute;left:8px;top:46px;width:384px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:209px;width:400px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать возвратные отходы',
			style: 'position:absolute;left:8px;top:26px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать документацию',
			style: 'position:absolute;left:8px;top:66px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать вид норматива',
			style: 'position:absolute;left:8px;top:106px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать указание норматива',
			style: 'position:absolute;left:8px;top:146px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать формулы',
			style: 'position:absolute;left:8px;top:166px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать управление списанием',
			style: 'position:absolute;left:8px;top:186px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать вид воспроизводства',
			style: 'position:absolute;left:8px;top:126px;width:384px;height:15px;',
		},
	]
});