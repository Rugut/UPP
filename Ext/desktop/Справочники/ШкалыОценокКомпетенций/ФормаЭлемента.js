Ext.define('Справочники.ШкалыОценокКомпетенций.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 298,width: 442,
	iconCls: 'bogus',
	title: 'Шкала оценок компетенций',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:354px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:442px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РедактироватьКодНомер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:273px;width:442px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:100px;width:426px;height:165px;',
			height: 165,width: 426,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ПриоритетОценки',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:76px;width:426px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
	]
});