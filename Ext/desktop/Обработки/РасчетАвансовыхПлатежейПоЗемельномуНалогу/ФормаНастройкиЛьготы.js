Ext.define('Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.ФормаНастройкиЛьготы',
	{
	extend: 'Ext.window.Window',
	height: 442,width: 508,
	iconCls: 'bogus',
	title: 'Налоговые льготы по земельному налогу',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НеОблагаемаяНалогомСумма',
			style: 'position:absolute;left:351px;top:180px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоляНеОблагаемойНалогомПлощадиЧислитель',
			style: 'position:absolute;left:241px;top:104px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентУменьшенияСуммыНалога',
			style: 'position:absolute;left:128px;top:285px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СниженнаяНалоговаяСтавка',
			style: 'position:absolute;left:62px;top:385px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаУменьшенияСуммыНалога',
			style: 'position:absolute;left:103px;top:310px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодНалоговойЛьготыОсвобождениеОтНалогообложенияПоСтатье395',
			style: 'position:absolute;left:380px;top:79px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодНалоговойЛьготыУменьшениеНалоговойБазыПоСтатье391',
			style: 'position:absolute;left:301px;top:154px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:417px;width:508px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоляНеОблагаемойНалогомПлощадиЗнаменатель',
			style: 'position:absolute;left:336px;top:104px;width:80px;height:19px;',
		},
	]
});