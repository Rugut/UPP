Ext.define('Отчеты.ФинансовыйАнализДанныхБюджетирования.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	height: 263,width: 356,
	iconCls: 'bogus',
	title: 'Отчет  Финансовый анализ данных бюджетирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:238px;width:356px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:114px;top:8px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:230px;top:8px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:328px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:114px;top:32px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВариантНастройки',
			style: 'position:absolute;left:114px;top:56px;width:234px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:340px;height:147px;',
			height: 147,width: 340,
			items:
			[
				{
					title:'РазделыОтчета',
					items:
					[
					]
				},
				{
					title:'АнализПрибыли',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СценарийСравнениеПрибыли',
			style: 'position:absolute;left:64px;top:30px;width:268px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачСравнениеПрибыли',
			style: 'position:absolute;left:64px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонСравнениеПрибыли',
			style: 'position:absolute;left:180px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаСравнение',
			text: '...',
			style: 'position:absolute;left:278px;top:6px;width:19px;height:19px;',
		},
					]
				},
			]
		},
	]
});