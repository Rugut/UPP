Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.НастройкаПараметровСохраненияРегламентированногоОтчета',
	{
	extend: 'Ext.window.Window',
	height: 86,width: 604,
	iconCls: 'bogus',
	title: 'Укажите каталог',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:61px;width:604px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПутьДляВыгрузки',
			style: 'position:absolute;left:148px;top:33px;width:448px;height:19px;',
		},
	]
});