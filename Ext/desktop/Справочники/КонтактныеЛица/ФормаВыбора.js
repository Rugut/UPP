Ext.define('Справочники.КонтактныеЛица.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 464,
	iconCls: 'bogus',
	title: 'Справочник Контактные лица',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:448px;height:280px;',
			height: 280,width: 448,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ДатаРождения',
				},
				{
					text:'Имя',
				},
				{
					text:'КоличествоДнейДоНапоминания',
				},
				{
					text:'НапоминатьОДнеРождения',
				},
				{
					text:'Описание',
				},
				{
					text:'Отчество',
				},
				{
					text:'Пол',
				},
				{
					text:'Фамилия',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:464px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});