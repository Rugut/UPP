Ext.define('Справочники.ПрожиточныеМинимумы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 294,width: 462,
	iconCls: 'bogus',
	title: 'Прожиточный минимум субъекта РФ, в целом по РФ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:374px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:240px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:462px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'РедактироватьКодНомер',
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
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:269px;width:462px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:84px;width:446px;height:177px;',
			height: 177,width: 446,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Период',
				},
				{
					text:'Размер',
				},
			]
		},
	]
});