Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.НастройкаПараметровСохраненияРегламентированногоОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:86px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Укажите каталог',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:61px;width:604px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Сохранить',
				},
				'-',
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
		{
			xtype: 'radio',
			boxLabel: 'Сохранить на дискету:',
			style: 'position:absolute;left:11px;top:7px;width:136px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сохранить в каталог:',
			style: 'position:absolute;left:11px;top:33px;width:136px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:148px;top:6px;width:60px;height:20px;',
		},
	]
});