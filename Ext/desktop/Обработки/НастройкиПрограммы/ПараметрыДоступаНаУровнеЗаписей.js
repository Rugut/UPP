Ext.define('Обработки.НастройкиПрограммы.ПараметрыДоступаНаУровнеЗаписей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:333px;height:335px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры доступа на уровне записей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:333px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ограничить доступ на уровне записей по видам объектов:',
			style: 'position:absolute;left:8px;top:8px;width:317px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:317px;height:251px;',
			height: 251,width: 317,
			columns:
			[
				{
					text:'Вид объекта доступа',
					width:'164',
					dataIndex:'ВидОбъектаДоступа',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиПрограммы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидОбъектаДоступа',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодсказкаКВидамОбъектов',
			text: 'Настройка доступа выполняется для групп пользователей.',
			style: 'position:absolute;left:8px;top:283px;width:317px;height:19px;',
		},
	]
});