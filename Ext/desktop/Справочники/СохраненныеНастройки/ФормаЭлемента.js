Ext.define('Справочники.СохраненныеНастройки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 336,width: 343,
	iconCls: 'bogus',
	title: 'Вариант отчета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:311px;width:343px;height:25px;',
			items:
			[
				{
					text:'ВернутьсяКЗаводскимНастройкам',
				},
				{
					text:'ЗагрузитьНастройкуИзФайла',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'СохранитьНастройку',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:152px;width:327px;height:151px;',
			height: 151,width: 327,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Пользователь',
				},
				{
					text:'ПравоИзменения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:95px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Описание',
			style: 'position:absolute;left:95px;top:30px;width:240px;height:72px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:128px;width:327px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'ДобавитьГруппу',
				},
				{
					text:'ДобавитьПользователя',
				},
				{
					text:'Добавить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});