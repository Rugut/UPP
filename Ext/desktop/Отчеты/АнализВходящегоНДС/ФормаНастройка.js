Ext.define('Отчеты.АнализВходящегоНДС.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:312px;height:158px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Анализ входящего НДС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:133px;width:312px;height:25px;',
			items:
			[
				{
					text:'ОК',
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
			name: 'Организация',
			style: 'position:absolute;left:84px;top:35px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:35px;width:76px;height:19px;',
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
			xtype: 'label',
			name: 'Надпись6',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:8px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'по:',
			style: 'position:absolute;left:166px;top:8px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сравнить суммы НДС, включенные в стоимость',
			style: 'position:absolute;left:8px;top:106px;width:296px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сравнить суммы НДС, предъявленные к вычету',
			style: 'position:absolute;left:8px;top:86px;width:296px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сравнить суммы НДС, предъявленные поставщиком',
			style: 'position:absolute;left:8px;top:66px;width:296px;height:15px;',
		},
	]
});