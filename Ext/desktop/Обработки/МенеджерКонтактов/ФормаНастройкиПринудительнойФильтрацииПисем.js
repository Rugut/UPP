Ext.define('Обработки.МенеджерКонтактов.ФормаНастройкиПринудительнойФильтрацииПисем',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:256px;height:226px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка фильтрации писем папки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:201px;width:256px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Статус письма:',
			style: 'position:absolute;left:23px;top:28px;width:97px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Полученное',
			style: 'position:absolute;left:38px;top:49px;width:82px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отправленное',
			style: 'position:absolute;left:38px;top:70px;width:96px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Исходящее',
			style: 'position:absolute;left:38px;top:91px;width:79px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохраненное',
			style: 'position:absolute;left:38px;top:112px;width:87px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Состояние письма:',
			style: 'position:absolute;left:23px;top:135px;width:120px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рассмотрено',
			style: 'position:absolute;left:38px;top:156px;width:90px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Не рассмотрено',
			style: 'position:absolute;left:38px;top:177px;width:105px;height:16px;',
		},
	]
});