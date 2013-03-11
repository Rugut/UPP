Ext.define('Справочники.ГруппыПользователей.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 500,
	iconCls: 'bogus',
	title: 'Группа пользователей',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:412px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:92px;top:33px;width:284px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеСправка',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:500px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:92px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:266px;top:113px;width:226px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:266px;top:138px;width:226px;height:214px;',
			height: 214,width: 226,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Пользователь',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:249px;height:214px;',
			height: 214,width: 249,
			columns:
			[
				{
					text:'ВидОбъектаДоступа',
				},
				{
					text:'ДоступноОбъектов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:249px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Права',
				},
			]
		},
	]
});