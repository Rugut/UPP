Ext.define('Справочники.ПодразделенияОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 380,width: 512,
	iconCls: 'bogus',
	title: 'Подразделения организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:496px;height:315px;',
			height: 315,width: 496,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Код',
				},
				{
					text:'КодПоОКАТО',
				},
				{
					text:'КПП',
				},
				{
					text:'Порядок',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:512px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПраваДоступаПользователейКТекущемуЭлементу',
				},
				{
					text:'ПраваДоступаПользователейКоВсемуСправочнику',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				{
					text:'ПереместитьВверх',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'ПереместитьВниз',
				},
				{
					text:'Права',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действия',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:233px;top:33px;width:271px;height:19px;',
		},
	]
});