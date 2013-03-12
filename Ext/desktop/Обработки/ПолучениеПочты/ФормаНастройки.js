Ext.define('Обработки.ПолучениеПочты.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:248px;height:75px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка получения почты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:50px;width:248px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Получать только непрочитанные',
			style: 'position:absolute;left:8px;top:8px;width:187px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Получать письма без вложенных файлов',
			style: 'position:absolute;left:8px;top:27px;width:232px;height:15px;',
		},
	]
});