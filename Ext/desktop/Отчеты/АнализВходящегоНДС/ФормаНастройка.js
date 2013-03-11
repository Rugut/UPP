Ext.define('Отчеты.АнализВходящегоНДС.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 158,width: 312,
	iconCls: 'bogus',
	title: 'Обработка  Анализ входящего НДС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:133px;width:312px;height:25px;',
			items:
			[
				{
					text:'ДействиеОтмена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:35px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:8px;width:20px;height:19px;',
		},
	]
});