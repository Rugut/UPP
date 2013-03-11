Ext.define('Справочники.Регионы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 232,width: 506,
	iconCls: 'bogus',
	title: 'Регионы',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:90px;top:58px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:90px;top:106px;width:406px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:502px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:207px;width:504px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
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
			style: 'position:absolute;left:90px;top:34px;width:406px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:154px;width:406px;height:45px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование1',
			style: 'position:absolute;left:90px;top:82px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодАдресногоЭлемента',
			style: 'position:absolute;left:288px;top:58px;width:208px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЖДСтанцияНазначения',
			style: 'position:absolute;left:90px;top:130px;width:406px;height:19px;',
		},
	]
});