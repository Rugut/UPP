Ext.define('Обработки.АвтоПолучениеОтправкаЭлектронныхПисем.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Автополучение/отправка электронных писем',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Обновить',
				},
				'-',
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:320px;',
			height: 320,width: 588,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Учетная запись',
					width:'220',
				},
				{
					text:'Адрес электронной почты',
					width:'220',
				},
				{
					text:'Время последнего обновления',
					width:'180',
				},
				{
					text:'Действие',
					width:'180',
				},
				{
					text:'Интервал обновления, мин',
					width:'160',
				},
			]
		},
	]
});