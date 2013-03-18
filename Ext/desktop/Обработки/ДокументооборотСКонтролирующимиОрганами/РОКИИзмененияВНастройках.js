Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИИзмененияВНастройках',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:618px;height:511px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список изменений в настройках, которые необходимо произвести',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:486px;width:618px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Произвести автоматическую настройку',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:64px;width:602px;height:414px;',
			height: 414,width: 602,
			columns:
			[
				{
					text:'Изменение',
					width:'328',
				},
				{
					text:'Подробнее',
					width:'152',
				},
				{
					text:'Старое значение',
					width:'100',
				},
				{
					text:'Новое значение',
					width:'100',
				},
				{
					text:'Изменение',
					width:'426',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВнимание',
			text: 'Внимание!
По информации на сервере автоматической настройки необходимо произвести следующие изменения в параметрах документооборота по учетной записи <УчетнаяЗапись>.',
			style: 'position:absolute;left:8px;top:8px;width:602px;height:46px;',
		},
	]
});