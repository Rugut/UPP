Ext.define('Справочники.СтатьиОтчетаОПрибыляхИУбытках.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 336,width: 324,
	iconCls: 'bogus',
	title: 'Статьи отчета о прибылях и убытках',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодДляОтчета',
			style: 'position:absolute;left:96px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:164px;width:308px;height:139px;',
			height: 139,width: 308,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СтатьяОборотов',
				},
				{
					text:'Знак',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:324px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:140px;width:308px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:324px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:38px;',
		},
	]
});