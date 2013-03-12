Ext.define('Отчеты.ТехнологическийАнализБухгалтерскогоУчета.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:402px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Технологический анализ бухгалтерского учета',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Организация:',
			style: 'position:absolute;left:285px;top:37px;width:76px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Настройка ...',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Очистить',
				},
				{
					text:'Очистить',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Сформировать',
				},
				'-',
				'-',
				{
					text:'Сравнить',
				},
				'-',
				{
					text:'Настройка...',
				},
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:377px;width:670px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:64px;width:654px;height:305px;',
			height: 305,width: 654,
			items:
			[
				{
					title:'Технологический анализ',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:363px;top:37px;width:288px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:254px;top:37px;width:19px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: '',
			style: 'position:absolute;left:47px;top:37px;width:180px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:25px;top:37px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:229px;top:37px;width:21px;height:19px;',
		},
	]
});